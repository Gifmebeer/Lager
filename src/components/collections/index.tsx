'use client';

import {
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Overlay,
  useMantineTheme,
} from '@mantine/core';
import Text from '@/components/Text';
import {
  useAddress,
  useContract,
  useNFTBalance,
  useOwnedNFTs,
} from '@thirdweb-dev/react';
import {
  NFT_COLLECTION_ADDRESS,
  NFT_MEMBERSHIP_ADDRESS,
} from '@/constants/addresses';
import { NFTCard } from '../NFTCard';
import useSWRMutation from 'swr/mutation';
import { Address } from 'viem';
import { useState } from 'react';
import { CURRENT_COLLECTIONS } from '@/constants/collections';
import { ICardItem, ICollection } from '@/types';

const collections: ICollection[] = CURRENT_COLLECTIONS;

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

const CollectionCard: React.FC<{ item: ICardItem; owned: boolean }> = ({
  item,
  owned,
}) => {
  const theme = useMantineTheme();

  return (
    <Card p='lg' bg='transparent' w='100%' opacity={owned ? 1 : 0.5}>
      <Card.Section>
        <Image w={350} src={item.imageUrl} alt={item.name} fit='contain' />
      </Card.Section>
      <Card.Section>
        <Group my={12} justify='center'>
          <Text style={{ fontWeight: 'bold' }} content={item.name} />
          {/* <Badge color='pink' variant='light'>
            {item.category}
          </Badge> */}
        </Group>
      </Card.Section>
    </Card>
  );
};

const CollectionsPage = () => {
  const MEMBERSHIP_TOKEN_ID = 1;
  const { data: membershipContract } = useContract(NFT_MEMBERSHIP_ADDRESS);
  const { data: collectionContract } = useContract(NFT_COLLECTION_ADDRESS);
  const address = useAddress();
  const [currentCollection, setCurrentCollection] = useState<ICollection>(
    CURRENT_COLLECTIONS[0]
  );
  const [claimDone, setClaimDone] = useState('');
  const {
    data: nfts,
    isLoading,
    refetch: refetchOwnedNFTS,
  } = useOwnedNFTs(membershipContract, address);

  const {
    data: collectionNfts,
    isLoading: collectionIsLoading,
    refetch: refetchOwnedCollectionNFTS,
  } = useOwnedNFTs(collectionContract, address);
  console.log({ collectionNfts });
  const { data: nftBalance, refetch: refetchNFTBalance } = useNFTBalance(
    membershipContract,
    address,
    MEMBERSHIP_TOKEN_ID
  );
  const ownedMembership = nfts?.find(
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
  // const cards = Array(5)
  //   .fill(currentCollection.cards)
  //   .flatMap((x) => x);
  const ownedFromCollection = collectionNfts?.map((nft: any) => nft.id) || [];
  const cards = currentCollection.cards;
  const filteredCards = cards.filter(
    (card: ICardItem) => !ownedFromCollection.includes(card.id)
  );

  return (
    <>
      <Container fluid mih={'40vh'} py={30} bg={'rgba(99,60, 230, 1)'}>
        <Flex
          py={12}
          px={24}
          m={0}
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
              ownedNFT={ownedMembership}
              nft={{
                image: '/images/collections/membership_card.png',
              }}
              claimed={!!ownedMembership}
            />
          )}
        </Flex>
      </Container>

      <Flex direction='row'>
        {Object.keys(collections).map((key: any, index) => {
          const collection: ICollection = collections[key];
          return (
            <Flex
              onClick={() => setCurrentCollection(CURRENT_COLLECTIONS[index])}
              key={index}
              direction='row'
              align={'center'}
              justify={'center'}
              pos='relative'
              gap='16px'
              bg={collection.color}
              p={20}
              pl={index === 0 ? 64 : 0}
              pr={42}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={`/images/icons/smiley_${(index % 3) + 1}.svg`}
                alt={'smiley'}
                w={24}
                h={24}
                fit='contain'
              />
              <Text maw='200' content={`${collection.name} Collection`} />
            </Flex>
          );
        })}
      </Flex>
      <Flex
        p={64}
        justify={'center'}
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: currentCollection.color,
        }}
      >
        {collectionIsLoading ? (
          <Text content='Loading' />
        ) : (
          <Grid grow gutter='xl' maw='1200px'>
            {ownedFromCollection.map((nft: any, index: number) => (
              <Grid.Col key={index} span={{ sm: 12, md: 6, xl: 4 }}>
                <CustomNFTCard
                  claim={null}
                  ownedNFT={nft}
                  nft={nft.metadata}
                  claimed={true}
                />
              </Grid.Col>
            ))}
            {filteredCards.map((item: ICardItem) => (
              <Grid.Col key={item.name} span={{ sm: 12, md: 6, xl: 4 }}>
                <CollectionCard item={item} owned={false} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Flex>
    </>
  );
};

export default CollectionsPage;
