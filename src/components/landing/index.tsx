'use client';

import {
  useContract,
  useAddress,
  useOwnedNFTs,
  useNFTBalance,
} from '@thirdweb-dev/react';
import { Flex } from '@mantine/core';
import Hero from './hero';
import Collections from './collections';
import Carousel from './carousel';
import { NFT_MEMBERSHIP_ADDRESS } from '@/constants/addresses';
import useSWRMutation from 'swr/mutation';
import { Address } from 'viem';

async function sendRequest(
  url: string,
  { arg }: { arg: { address: Address } }
) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

const LandingPage = () => {
  const TOKEN_ID = 1;
  const { data: contract } = useContract(NFT_MEMBERSHIP_ADDRESS);
  const address = useAddress();
  const {
    data: nfts,
    isLoading,
    refetch: refetchOwnedNFTS,
  } = useOwnedNFTs(contract, address);
  const { data: nftBalance, refetch: refetchNFTBalance } = useNFTBalance(
    contract,
    address,
    TOKEN_ID
  );

  const { trigger, isMutating } = useSWRMutation('/api/mint', sendRequest);

  const refetch = () => {
    refetchOwnedNFTS();
    refetchNFTBalance();
  };

  const claim = async () => {
    try {
      console.log('triggerin');
      const result = await trigger({ address: address as Address });
      console.log({ result });
      refetch();
    } catch (e) {
      // error handling
    }
  };

  return (
    <Flex justify={'center'} align={'center'} direction='column'>
      <Hero />
      <Collections />
      <Carousel />
    </Flex>
  );
};

export default LandingPage;
