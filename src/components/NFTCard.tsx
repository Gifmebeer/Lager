import { NFT, ThirdwebNftMedia } from '@thirdweb-dev/react';
import type { FC } from 'react';
// import Link from 'next/link';
// import { NFT_MEMBERSHIP_ADDRESS } from '@/constants/addresses';
import { Flex } from '@mantine/core';
// import currentNetwork from '@/constants/currentNetwork';

interface NFTCardProps {
  metadata: NFT['metadata'];
  address?: string;
  w?: number | string;
  withShadow?: boolean;
}

export const NFTCard: FC<NFTCardProps> = ({
  metadata,
  address,
  w,
  withShadow,
}) => {
  return (
    // <Link
    //   href={`https://thirdweb.com/${currentNetwork.thirdwebName}/${
    //     address || NFT_MEMBERSHIP_ADDRESS
    //   }/nfts/0/${metadata.id}`}
    //   target='_blank'
    //   rel='noopener noreferrer'
    // >
    <Flex
      justify="center"
      align="center"
      direction="column"
      key={metadata.id}
      w={{ base: w || '300px' }}
      style={{
        boxShadow: withShadow
          ? '-15px 15px 30px 0px rgba(0, 0, 0, 0.25)'
          : 'none',
      }}
    >
      <ThirdwebNftMedia metadata={metadata} width="100%" height="100%" />
    </Flex>
    // </Link>
  );
};
