'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
});

import React, { useEffect, useState } from 'react';
import { Button, Center, Text } from '@mantine/core';
import { CURRENT_COLLECTIONS } from '@/constants/collections';

const Claim = ({ params: { nft } }: { params: { nft: string } }) => {
  const [isValidNFT, setIsValidNFT] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!nft || nft.length !== 2) return; // Ensure that nft is an array with exactly two elements
    const address = nft[0];
    const id = nft[1];
    // Check if the NFT exists in myNFTs
    const collectionExists = CURRENT_COLLECTIONS.find(
      (nft: any) => nft.address === address
    );
    console.log({ collectionExists });
    if (collectionExists) {
      const nftExists = collectionExists.cards.find(
        (card: any) => card.id === Number(id)
      );
      setIsValidNFT(!!nftExists);
      setReady(true);
    }
  }, [nft]);
  console.log({ isValidNFT });
  return (
    <Center style={{ minHeight: '100vh' }} bg='black'>
      <div>
        {!!isValidNFT ? (
          <>
            <Text c='white' size='xl' style={{ marginBottom: '1rem' }}>
              Click here to claim
            </Text>
            <Button bg='white' c='black' fullWidth>
              claim
            </Button>
          </>
        ) : (
          <Text c='white' size='xl' style={{ marginBottom: '1rem' }}>
            Loading
          </Text>
        )}
      </div>
    </Center>
  );
};

export default Claim;
