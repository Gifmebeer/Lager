import { Flex, Loader } from '@mantine/core';

import React, { useEffect, useState } from 'react';
import { Button, Center, Text } from '@mantine/core';
import { CURRENT_COLLECTIONS, membership } from '@/constants/collections';
import {
  ConnectWallet,
  useAddress,
  useConnectionStatus,
  useContract,
  useOwnedNFTs,
  useNFT,
  useSetIsWalletModalOpen,
} from '@thirdweb-dev/react';
import useSWRMutation from 'swr/mutation';
import { Address } from 'viem';
import { NFTCard } from '@/components/NFTCard';
import AppShell from '@/components/Appshell';
import {
  createPublicWalletClient,
  getExplorerLink,
  shortenAddress,
} from '@/utils/web3';
import Link from 'next/link';
import { useRouter } from 'next/router';
import currentNetwork from '@/constants/currentNetwork';

async function sendRequest(
  url: string,
  { arg }: { arg: { address: Address; nftAddress: Address; tokenId: string } }
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
  const { walletClient } = createPublicWalletClient();
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === 'connected';
  const isConnecting = connectionStatus === 'connecting';
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<any>(false);
  const [receipt, setReceipt] = useState<any>(null);
  const [isValidNFT, setIsValidNFT] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  const setIsWalletModalOpen = useSetIsWalletModalOpen();
  const { data: nftContract, isError: contractError } = useContract(
    nft as Address
  );
  const { data: currentNFT, isLoading: currentNFTIsLoading } = useNFT(
    nftContract,
    tokenId
  );
  const {
    data: ownedNFT,
    isFetched: ownedNFTFetched,
    refetch: refetchOwnNFTS,
  } = useOwnedNFTs(nftContract, address);

  const ownsNFT = ownedNFT?.find(
    (i) => Number(i.metadata.id) === Number(tokenId)
  );

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
        refetchOwnNFTS();
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
    // Check if the NFT exists in myNFTs
    const collectionExists = CURRENT_COLLECTIONS.find(
      (nft: any) => nft.address === contractAddress
    );

    if (collectionExists) {
      const nftExists = collectionExists.cards.find(
        (card: any) => card.id === Number(id)
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
      <Loader color='white' />
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
        direction='column'
        gap='lg'
        bg='black'
      >
        <Loader color='white' />
        {isMinting && (
          <Text c='white'>
            Minting... {claimDone && `tx: ${shortenAddress(claimDone)}`}
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
        direction='column'
        gap='lg'
        bg='black'
      >
        <Text c='white' size='xl' maw='500px'>
          Error: Claim not valid or an error occurred.
        </Text>
        <br />
        <Text c='white' size='md' maw='500px'>
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
        bg='black'
      >
        <Text c='white' size='xl' maw={{ base: '300px', md: '100%' }}>
          Please connect your wallet to claim
        </Text>
        <ConnectWallet />
      </Center>
    );
  }

  return (
    <AppShell noPadding={true} noLogin={true} isClaim={true}>
      <Center style={{ minHeight: '100vh' }} bg='black'>
        <Flex
          align='center'
          direction='column'
          gap='lg'
          mt={{ base: '60px', md: 0 }}
        >
          <CurrentCard />
          {ownedNFTFetched && isValidNFT && !ownsNFT ? (
            <Flex align='center' direction='column' gap='lg'>
              <Button
                bg='white'
                c='black'
                style={{
                  backgroundColor: 'black',
                  fontFamily: 'MetamorBit-Latin',
                }}
                onClick={async () => await claim()}
                fullWidth
              >
                Claim NFT
              </Button>
            </Flex>
          ) : ownedNFTFetched && ownsNFT ? (
            <Text c='white' size='xl' style={{ marginBottom: '1rem' }}>
              You already own this NFT
            </Text>
          ) : null}
          {receipt && (
            <Flex align='center' direction='column' gap='xs'>
              <Text c='white' size='md' style={{ marginBottom: '1rem' }}>
                Claimed NFT!{' '}
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: 'underline' }}
                  href={getExplorerLink(
                    receipt?.transactionHash,
                    currentNetwork.chainId
                  )}
                >
                  {`tx: ${shortenAddress(receipt?.transactionHash)}`}
                </Link>
              </Text>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'underline', color: 'white' }}
                href={'/collections'}
              >
                See your collection
              </Link>
            </Flex>
          )}
        </Flex>
      </Center>
    </AppShell>
  );
};

export default Claim;
