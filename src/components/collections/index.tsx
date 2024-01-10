'use client';

import { Button, Card, Container, Flex, Image, Overlay } from '@mantine/core';
import Text from '@/components/Text';
import {
  useAddress,
  useContract,
  useNFTBalance,
  useOwnedNFTs,
} from '@thirdweb-dev/react';
import { NFT_MEMBERSHIP_ADDRESS } from '@/constants/addresses';
import { NFTCard } from '../NFTCard';
import useSWRMutation from 'swr/mutation';
import { Address } from 'viem';
import { useState } from 'react';

async function sendRequest(
  url: string,
  { arg }: { arg: { address: Address } }
) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

const CustomNFTCard = ({ nft, ownedNFT, claimed, claim }: any) => {
  return (
    <Card w={400} m={0} p={0} bg='transparent'>
      <Flex
        w='100%'
        h='100%'
        miw={'400px'}
        mih='400px'
        m={0}
        p={0}
        direction='column'
        align={'center'}
        justify={'center'}
      >
        {ownedNFT ? (
          <NFTCard metadata={ownedNFT.metadata} key={ownedNFT.metadata.id} />
        ) : (
          !claimed && (
            <Button style={{ zIndex: 300 }} variant='filled' onClick={claim}>
              claim
            </Button>
          )
        )}
        {!claimed && <Overlay color='#fff' backgroundOpacity={0.5} />}
      </Flex>
      <Flex
        mt={14}
        w={'100px'}
        align={'center'}
        justify={'center'}
        dir='row'
        gap={12}
      >
        <Text content={nft.title} />
      </Flex>
    </Card>
  );
};

const CollectionsPage = () => {
  const MEMBERSHIP_TOKEN_ID = 1;
  const { data: contract } = useContract(NFT_MEMBERSHIP_ADDRESS);
  const address = useAddress();
  const [claimDone, setClaimDone] = useState('');
  const {
    data: nfts,
    isLoading,
    refetch: refetchOwnedNFTS,
  } = useOwnedNFTs(contract, address);
  const { data: nftBalance, refetch: refetchNFTBalance } = useNFTBalance(
    contract,
    address,
    MEMBERSHIP_TOKEN_ID
  );
  const ownedNFT = nfts?.find(
    (i) => Number(i.metadata.id) === MEMBERSHIP_TOKEN_ID
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
      setClaimDone(result?.transactionRequest);
      refetch();
    } catch (e) {
      // error handling
      alert(e);
    }
  };

  return (
    <Container fluid mih={'40vh'} py={30} bg={'rgba(99,60, 230, 1)'}>
      <Flex
        py={12}
        px={24}
        m={0}
        gap={100}
        justify={'flex-start'}
        align={'center'}
        direction={{ base: 'column', md: 'row' }}
      >
        <Text
          style={{ fontSize: '35px' }}
          c='white'
          maw='300px'
          content='GIFME.BEER MEMBERSHIP'
        />
        {claimDone ? (
          <Flex direction='column'>
            <Text
              maw='300px'
              c='white'
              content={`You've claimed your membership! wait for the transaction to be confirmed.`}
            />
            <Button
              mt={20}
              style={{ zIndex: 300 }}
              variant='filled'
              onClick={refetch}
            >
              Refresh
            </Button>
          </Flex>
        ) : !address || isLoading || isMutating ? (
          <Text
            c='white'
            content={
              !address
                ? 'No wallet connected'
                : isLoading
                ? 'Loading'
                : isMutating
                ? 'Minting'
                : ''
            }
          />
        ) : (
          <CustomNFTCard
            claim={claim}
            ownedNFT={ownedNFT}
            nft={{
              image: '/images/collections/membership_card.png',
            }}
            claimed={!!ownedNFT}
          />
        )}
      </Flex>
    </Container>
  );
};

export default CollectionsPage;