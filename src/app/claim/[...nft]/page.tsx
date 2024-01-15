'use client';

import { Flex, Loader } from '@mantine/core';

import React, { useEffect, useState } from 'react';
import { Button, Center, Text } from '@mantine/core';
import { CURRENT_COLLECTIONS, membership } from '@/constants/collections';
import {
  ConnectWallet,
  useAddress,
  useConnectedWallet,
  useContract,
  useOwnedNFTs,
  useNFT,
} from '@thirdweb-dev/react';
import useSWRMutation from 'swr/mutation';
import { Address } from 'viem';
import { NFTCard } from '@/components/NFTCard';
import {
  createPublicWalletClient,
  getExplorerLink,
  shortenAddress,
} from '@/utils/web3';
import Link from 'next/link';

async function sendRequest(
  url: string,
  { arg }: { arg: { address: Address; nftAddress: Address; tokenId: string } }
) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

const Claim = ({ params: { nft } }: { params: { nft: any } }) => {
  const [claimDone, setClaimDone] = useState('');
  const address = useAddress();
  const { walletClient } = createPublicWalletClient(
    CURRENT_COLLECTIONS[0].chainId
  );
  const isConnected = useConnectedWallet();
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<any>(false);
  const [receipt, setReceipt] = useState<any>(null);
  const [isValidNFT, setIsValidNFT] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  const { data: nftContract, isError: contractError } = useContract(
    nft[0] as Address
  );
  const { data: currentNFT, isLoading: currentNFTIsLoading } = useNFT(
    nftContract,
    nft[1]
  );

  const {
    data: ownedNFT,
    isFetched: ownedNFTFetched,
    refetch: refetchOwnNFTS,
  } = useOwnedNFTs(nftContract, address);

  const ownsNFT = ownedNFT?.find(
    (i) => Number(i.metadata.id) === Number(nft[1])
  );

  const {
    trigger,
    error: mutationError,
    isMutating,
  } = useSWRMutation('/api/mint', sendRequest);

  const claim = async () => {
    try {
      if (!isValidNFT) return alert('Invalid NFT');
      console.log('triggerin');
      setIsMinting(true);
      const result = await trigger({
        address: address as Address,
        nftAddress: nft[0] as Address,
        tokenId: nft[1] as string,
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
    if (!nft || nft.length !== 2) return;
    const contractAddress = nft[0];
    const id = nft[1];
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

  const CurrentCard = () => {
    return currentNFTIsLoading ? (
      <Loader color='white' />
    ) : (
      currentNFT && (
        <NFTCard address={nft[0]} metadata={currentNFT.metadata} key={nft[1]} />
      )
    );
  };

  const isError = contractError || !isValidNFT || mutationError || error;
  const isLoading = isMutating || isMinting || !ready;

  if (isLoading) {
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

  if (!isConnected && !ready) {
    return (
      <Center
        style={{ minHeight: '100vh', flexDirection: 'column', gap: '20px' }}
        bg='black'
      >
        <Text c='white' size='xl'>
          Please connect your wallet to claim
        </Text>
        <ConnectWallet />
      </Center>
    );
  }

  return (
    <Center style={{ minHeight: '100vh' }} bg='black'>
      <Flex align='center' direction='column' gap='lg'>
        <CurrentCard />
        {ownedNFTFetched && isValidNFT && !ownsNFT ? (
          <Flex align='center' direction='column' gap='lg'>
            <Button
              bg='white'
              c='black'
              style={{ backgroundColor: 'black' }}
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
                href={getExplorerLink(receipt?.transactionHash, 80001)}
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
  );
};

export default Claim;
