'use client';

import { Card, Container, Flex, Image, Overlay } from '@mantine/core';
import Text from '@/components/Text';
import {
  useAddress,
  useContract,
  useNFTBalance,
  useOwnedNFTs,
} from '@thirdweb-dev/react';
import { NFT_MEMBERSHIP_ADDRESS } from '@/constants/addresses';
import { NFTCard } from '../NFTCard';

const CustomNFTCard = ({ nft, ownedNFT, claimed }: any) => {
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
          <p>empty</p>
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
  const membershipBalance = nftBalance?.toNumber() || 0;
  const ownedNFT =
    membershipBalance > 0 &&
    nfts?.find((i) => Number(i.metadata.id) === MEMBERSHIP_TOKEN_ID);

  return (
    <Container fluid mih={'40vh'} py={30} bg={'rgba(99,60, 230, 1)'}>
      <Flex py={12} px={24} m={0} gap={100} justify={'flex-start'}>
        <Text
          style={{ fontSize: '35px' }}
          c='white'
          maw='300px'
          content='GIFME.BEER MEMBERSHIP'
        />
        <CustomNFTCard
          ownedNFT={ownedNFT}
          nft={{
            image: '/images/collections/membership_card.png',
          }}
          claimed={!!ownedNFT}
        />
      </Flex>
    </Container>
  );
};

export default CollectionsPage;
