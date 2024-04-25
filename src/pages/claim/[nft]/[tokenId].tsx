import { Flex, Loader, em } from '@mantine/core';

import React, { useEffect, useState } from 'react';
import { Image, Button, Center, Text } from '@mantine/core';
import CustomText from '@/components/Text';
import { CURRENT_COLLECTIONS, membership } from '@/constants/collections';
import { useContract, useOwnedNFTs, useNFT } from '@thirdweb-dev/react';
import useSWRMutation from 'swr/mutation';
import { Address } from 'viem';
import ConnectWallet, { client } from '@/components/ConnectWallet';
import { NFTCard } from '@/components/NFTCard';
import AppShell from '@/components/Appshell';
import { shortenAddress } from '@/utils/web3';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ICollection } from '@/types';
import { useMediaQuery } from '@mantine/hooks';
import {
  useActiveAccount,
  useActiveWalletConnectionStatus,
  useWaitForReceipt,
} from 'thirdweb/react';
import currentNetwork from '@/constants/currentNetwork';

async function sendRequest(
  url: string,
  { arg }: { arg: { address: Address; nftAddress: Address; tokenId: string } },
) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

const Claim = (params: any) => {
  const router = useRouter();
  const nft = router.query.nft as Address;
  const tokenId = router.query.tokenId as string;
  const [claimDone, setClaimDone] = useState('');
  const account = useActiveAccount();
  const address = account?.address;
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const connectionStatus = useActiveWalletConnectionStatus();
  const isConnected = connectionStatus === 'connected';
  const isConnecting = connectionStatus === 'connecting';
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<any>(false);
  const [isValidNFT, setIsValidNFT] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  const { data: nftContract, isError: contractError } = useContract(
    nft as Address,
  );
  const { data: currentNFT, isLoading: currentNFTIsLoading } = useNFT(
    nftContract,
    tokenId,
  );
  const {
    data: ownedNFT,
    isFetched: ownedNFTFetched,
    refetch: refetchOwnNFTS,
  } = useOwnedNFTs(nftContract, address);

  // Check if the NFT exists in myNFTs
  const allCards: any = React.useMemo(() => {
    return CURRENT_COLLECTIONS.reduce((acc: any, collection: ICollection) => {
      // Assuming each collection has a 'cards' array
      return acc.concat(collection.cards);
    }, []);
  }, [CURRENT_COLLECTIONS]);

  const currentCollectionCards = React.useMemo(() => {
    return allCards.filter(() => {
      return allCards.find((card: any) => card.address === nft);
    });
  }, [allCards, nft]);
  const nftLocalMetadata = currentCollectionCards.find(
    (card: any) => card.id === Number(tokenId),
  );
  const limit = nftLocalMetadata?.limit || 10 ** 10000; // No limits, then infinity
  const availableForMinting = currentNFT
    ? Number(currentNFT?.supply) < limit
    : null;

  const ownsNFT = ownedNFT?.find(
    (i) => Number(i.metadata.id) === Number(tokenId),
  );
  const owned = ownedNFT?.length;

  const {
    trigger,
    error: mutationError,
    isMutating,
  } = useSWRMutation('/api/claim', sendRequest);

  const { data: receipt, isLoading: receiptLoading } = useWaitForReceipt({
    client,
    chain: currentNetwork.thirdwebChainv5,
    transactionHash: claimDone as `0x${string}`,
  });
  const claim = async () => {
    try {
      if (!isValidNFT) return alert('Invalid NFT');
      console.log('triggerin');
      setIsMinting(true);
      const result = await trigger({
        address: address as Address,
        nftAddress: nft as Address,
        tokenId: tokenId as string,
      });
      console.log({ result });
      if (result.error) {
        setError(result.error);
        setIsMinting(false);
      } else {
        const tx = await result?.transactionRequest;
        setClaimDone(tx);
        setIsMinting(false);
      }
    } catch (e) {
      // error handling
      setIsMinting(false);
      setClaimDone('');
      alert(e);
    }
  };

  useEffect(() => {
    if (!nft) return;
    const contractAddress = nft;
    const id = tokenId;

    const collectionExists = CURRENT_COLLECTIONS.find(
      (collection: ICollection) =>
        collection.address.toLowerCase() === contractAddress.toLowerCase(),
    );
    if (collectionExists) {
      const nftExists = allCards.find(
        (card: any) => card.id === Number(id) && card.enabled !== false,
      );
      setIsValidNFT(!!nftExists);
    } else {
      // Checks if it's membership NFT
      const isMembership =
        membership.address.toLowerCase() === contractAddress.toLowerCase();
      setIsValidNFT(!!isMembership);
    }

    setReady(true);
  }, [nft]);

  useEffect(() => {
    if (!ready || isConnecting) return;
    // if (!isConnected) return setIsWalletModalOpen(true);
  }, [ready, isConnected]);

  useEffect(() => {
    if (receipt) {
      refetchOwnNFTS();
    }
  }, [receipt]);

  const CurrentCard = () => {
    return (
      currentNFT && (
        <div style={{ opacity: availableForMinting ? 1 : 0.5 }}>
          <NFTCard address={nft} metadata={currentNFT.metadata} key={tokenId} />
        </div>
      )
    );
  };

  const isError = contractError || !isValidNFT || mutationError || error;
  const connecting = connectionStatus === 'connecting';
  const isLoading = connecting || isMutating || isMinting || !ready;

  if (isLoading) {
    return (
      <Flex
        style={{ minHeight: '100vh' }}
        justify={'center'}
        align={'center'}
        direction="column"
        gap="lg"
        bg="black"
      >
        <Loader color="white" />
        {isMinting && (
          <Text c="white">
            Brewing... {claimDone && `tx: ${shortenAddress(claimDone)}`}
          </Text>
        )}
      </Flex>
    );
  }

  if (isError) {
    return (
      <Flex
        style={{ minHeight: '100vh', textAlign: 'center' }}
        justify={'center'}
        align={'center'}
        direction="column"
        gap="lg"
        bg="black"
      >
        <Text c="white" size="xl" maw="500px">
          Error: Claim not valid or an error occurred.
        </Text>
        <br />
        <Text c="white" size="md" maw="500px">
          {mutationError && ` ${mutationError}`}
          {error && ` ${error?.cause?.message}`}
        </Text>
      </Flex>
    );
  }
  if (ready && !isConnected) {
    return (
      <Center
        style={{
          textAlign: 'center',
          minHeight: '100vh',
          flexDirection: 'column',
          gap: '20px',
        }}
        bg="black"
      >
        <Image
          w={'120px'}
          src="/images/gmb_logo.svg"
          alt="Logo"
          style={{ cursor: 'pointer' }}
        />
        <Text size="xl" style={{ color: 'white' }}>
          Please login to claim your NFT
        </Text>
        <ConnectWallet btntitle="Login" className={'connectButtonDefault'} />
      </Center>
    );
  }

  return (
    <AppShell noPadding={true} noLogin={true} isClaim={true}>
      <Center
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '90vh',
          position: 'relative',
        }}
        bg="black"
      >
        <Flex
          align="center"
          justify={'center'}
          direction="column"
          gap="lg"
          mt={{ base: '140px', md: 0 }}
        >
          {ownedNFTFetched && isValidNFT && !ownsNFT ? (
            <Flex
              direction="column"
              gap="lg"
              style={{
                position: 'absolute',
                margin: 'auto',
              }}
            >
              {!receipt && !!availableForMinting && !isMinting && (
                <Button
                  w="250px"
                  bg={'#FF0'}
                  c="black"
                  size="xl"
                  disabled={isMinting}
                  style={{
                    zIndex: 1,
                    margin: 'auto',
                    backgroundColor: 'black',
                    fontFamily: 'MetamorBit-Latin',
                    border: '2px solid black',
                  }}
                  onClick={async () => await claim()}
                  fullWidth
                >
                  <Text fw="bold" size="xl" c="black">
                    {receiptLoading
                      ? 'Processing'
                      : availableForMinting
                      ? 'Download'
                      : 'Sold Out'}
                  </Text>
                </Button>
              )}
            </Flex>
          ) : ownedNFTFetched && ownsNFT ? (
            <Flex
              align="center"
              direction="column"
              gap="xs"
              // style={{ position: 'absolute', top: 0 }}
            >
              <Flex
                justify={'center'}
                align={'center'}
                direction="column"
                w="100vw"
                bg="#E2E1E1"
                py={'xs'}
                my={22}
                style={{ textAlign: 'center' }}
              >
                <Text
                  c="black"
                  size="xl"
                  maw="225px"
                  style={{ fontWeight: 'bold' }}
                >
                  ¡Ya tienes tu NFT!
                </Text>
              </Flex>

              <Link
                // target="_blank"
                // rel="noopener noreferrer"
                style={{ color: 'white' }}
                href={'/collections'}
              >
                <Flex
                  style={{
                    border: '2px solid transparent',
                    padding: '6px 24px',
                    borderRadius: '18px',
                    fontFamily: 'Metamor Bit_Latin',
                  }}
                  bg="#FF0"
                  mb={10}
                >
                  <CustomText c={'black'} content="See my collection" />
                </Flex>
              </Link>
            </Flex>
          ) : null}
          {currentNFT ? <CurrentCard /> : <Loader color="white" />}
        </Flex>
      </Center>
    </AppShell>
  );
};

export default Claim;
