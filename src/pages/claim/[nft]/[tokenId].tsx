import { Flex, Loader, em } from '@mantine/core';

import React, { useEffect, useState } from 'react';
import { Button, Center, Text } from '@mantine/core';
import CustomText from '@/components/Text';
import { CURRENT_COLLECTIONS, membership } from '@/constants/collections';
import {
  useAddress,
  useConnectionStatus,
  useContract,
  useOwnedNFTs,
  useNFT,
  useSetIsWalletModalOpen,
} from '@thirdweb-dev/react';
import useSWRMutation from 'swr/mutation';
import { Address } from 'viem';
import ConnectWallet from '@/components/ConnectWallet';
import { NFTCard } from '@/components/NFTCard';
import AppShell from '@/components/Appshell';
import { createPublicWalletClient, shortenAddress } from '@/utils/web3';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ICollection } from '@/types';
import { useMediaQuery } from '@mantine/hooks';

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
  const address = useAddress();
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const { walletClient } = createPublicWalletClient();
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === 'connected';
  const isConnecting = connectionStatus === 'connecting';
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<any>(false);
  const [receipt, setReceipt] = useState<any>(null);
  const [redeemCode, setRedeemCode] = useState(null);
  const [isValidNFT, setIsValidNFT] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  const setIsWalletModalOpen = useSetIsWalletModalOpen();
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

  const ownsNFT = ownedNFT?.find(
    (i) => Number(i.metadata.id) === Number(tokenId),
  );
  const owned = ownedNFT?.length;
  const giftReady = owned === 7;
  const {
    trigger,
    error: mutationError,
    isMutating,
  } = useSWRMutation('/api/claim', sendRequest);

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
        setClaimDone(result?.transactionRequest);
        const receipt = await walletClient.waitForTransactionReceipt({
          hash: tx,
        });
        console.log({ receipt });
        setReceipt(receipt);
        await refetchOwnNFTS();
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
    const getRedeemCode = async () => {
      if (!address) return;
      try {
        const response = await fetch('/api/generateGiftCode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ address }),
        });
        const data = await response.json();
        if (data?.code) {
          setRedeemCode(data?.code); // Save the received code to state
        } else {
          console.error('Error fetching code:', data.error);
        }
      } catch (error) {
        console.error('Error fetching code:', error);
      }
    };

    getRedeemCode();
  }, [address]);

  useEffect(() => {
    if (!nft) return;
    const contractAddress = nft;
    const id = tokenId;
    // Check if the NFT exists in myNFTs
    const allCards = CURRENT_COLLECTIONS.reduce(
      (acc: any, collection: ICollection) => {
        // Assuming each collection has a 'cards' array
        return acc.concat(collection.cards);
      },
      [],
    );
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
    if (!isConnected) return setIsWalletModalOpen(true);
  }, [ready, isConnected]);

  const CurrentCard = () => {
    return currentNFTIsLoading ? (
      <Loader color="white" />
    ) : (
      currentNFT && (
        <NFTCard address={nft} metadata={currentNFT.metadata} key={tokenId} />
      )
    );
  };

  const isError = contractError || !isValidNFT || mutationError || error;
  const connecting =
    connectionStatus === 'connecting' || connectionStatus === 'unknown';
  const isLoading = connecting || isMutating || isMinting || !ready;

  if (isLoading || !ready) {
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
        <ConnectWallet btntitle="Login" className={'connectButton3'} />
      </Center>
    );
  }

  return (
    <AppShell noPadding={true} noLogin={true} isClaim={true}>
      <Center style={{ minHeight: '100vh', position: 'relative' }} bg="black">
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
              <Button
                w="182px"
                bg="#FF0"
                c="black"
                style={{
                  margin: 'auto',
                  backgroundColor: 'black',
                  fontFamily: 'MetamorBit-Latin',
                }}
                onClick={async () => await claim()}
                fullWidth
              >
                Download
              </Button>
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
                  {owned} de 7 NFTs {giftReady ? ` / ${redeemCode || ''}` : ''}
                </Text>
                <Text
                  maw="500px"
                  c="black"
                  size={isMobile ? 'md' : 'lg'}
                  w="100%"
                >
                  {giftReady
                    ? '¡Ya tienes regalo! Enseña tu código para recogerlo'
                    : '¡Sigue coleccionando para tener tu regalo!'}
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
          <CurrentCard />
        </Flex>
      </Center>
    </AppShell>
  );
};

export default Claim;
