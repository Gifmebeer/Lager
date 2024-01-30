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
import { NFTCard } from '@/components/NFTCard';
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
  return (
    <div>
      <Flex
        m={100}
        mih={100}
        gap='md'
        justify='center'
        align='center'
        direction='column'
      >
        {!address ? null : isLoading ? (
          <div>
            <h3>Loading...</h3>
          </div>
        ) : (
          <Flex justify='center' align='center' direction='column'>
            {<h1>GifMeBeer Membership</h1>}
            <h2>
              TOTAL ITEMS: <span>{nftBalance?.toNumber()}</span>
            </h2>
            {!address && <h1>Connect your wallet</h1>}
            {address && isLoading && <h1>Loading...</h1>}
            {address && !isLoading && !nfts?.length && (
              <Flex justify='center' align='center' direction='column'>
                <h3>You have no membership </h3>
                {isMutating ? (
                  <h3>Interacting with contract...</h3>
                ) : (
                  <button onClick={claim}>claim</button>
                )}
              </Flex>
            )}
            <div>
              {nfts?.map((nft) => (
                <NFTCard metadata={nft.metadata} key={nft.metadata.id} />
              ))}
            </div>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default LandingPage;
