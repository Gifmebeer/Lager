'use client';

import { NFT, ThirdwebNftMedia } from '@thirdweb-dev/react';
import type { FC } from 'react';
import Link from 'next/link';
import { NFT_MEMBERSHIP_ADDRESS } from '@/constants/addresses';
import { Flex } from '@mantine/core';

interface NFTCardProps {
  metadata: NFT['metadata'];
  address?: string;
}

export const NFTCard: FC<NFTCardProps> = ({ metadata, address }) => {
  return (
    <Link
      href={`https://thirdweb.com/mumbai/${
        address || NFT_MEMBERSHIP_ADDRESS
      }/nfts/0/${metadata.id}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Flex
        justify='center'
        align='center'
        direction='column'
        key={metadata.id}
      >
        <ThirdwebNftMedia metadata={metadata} width='400px' height='100%' />
      </Flex>
    </Link>
  );
};
