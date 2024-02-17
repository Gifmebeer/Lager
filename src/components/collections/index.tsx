import { Card, Container, Flex, Grid, Group, Image, em } from '@mantine/core';
import Text from '@/components/Text';
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { NFT_COLLECTION_ADDRESS } from '@/constants/addresses';
import { NFTCard } from '../NFTCard';
import { useState } from 'react';
import { CURRENT_COLLECTIONS, membership } from '@/constants/collections';
import { ICardItem, ICollection } from '@/types';
import { useMediaQuery } from '@mantine/hooks';

const collections: ICollection[] = CURRENT_COLLECTIONS;

const CollectionCard: React.FC<{
  w?: number | string;
  item?: ICardItem | any;
  metadata?: any;
  showTitle?: boolean;
  address?: string;
  owned: boolean;
}> = ({ w, item, owned, metadata, showTitle, address }) => {
  return (
    <Card w={w || '300px'} p='lg' bg='transparent' opacity={owned ? 1 : 0.7}>
      <Card.Section>
        {metadata ? (
          <NFTCard metadata={metadata} key={metadata.id} address={address} />
        ) : (
          item && (
            <Image
              w={w || 300}
              src={item.imageUrl}
              alt={item.name}
              fit='contain'
            />
          )
        )}
      </Card.Section>
      <Card.Section>
        <Group my={12} justify='center'>
          {showTitle && (
            <Text
              size='lg'
              style={{ fontWeight: 'bold', textTransform: 'capitalize' }}
              content={metadata ? metadata.name : item && item.name}
            />
          )}
        </Group>
      </Card.Section>
      {!owned && (
        <Image
          w={100}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          src={'/images/icons/missing_corner.svg'}
          alt={'missing'}
          fit='contain'
        />
      )}
    </Card>
  );
};

const CollectionsPage = () => {
  // const MEMBERSHIP_TOKEN_ID = 1;
  // const { data: membershipContract } = useContract(NFT_MEMBERSHIP_ADDRESS);
  const { data: collectionContract } = useContract(NFT_COLLECTION_ADDRESS);
  const address = useAddress();
  const [currentCollection, setCurrentCollection] = useState<ICollection>(
    CURRENT_COLLECTIONS[0]
  );
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  // const {
  //   data: memberNFTs,
  //   isLoading: membershipNFTLoading,
  //   isFetched: fetchedMembershipNFT,
  // } = useOwnedNFTs(membershipContract, address);

  const { data: collectionNfts, isLoading: collectionIsLoading } = useOwnedNFTs(
    collectionContract,
    address
  );
  console.log({ collectionNfts });
  // const ownedMembership = memberNFTs?.find(
  //   (i) => Number(i.metadata.id) === MEMBERSHIP_TOKEN_ID
  // );

  // const cards = Array(5)
  //   .fill(currentCollection.cards)
  //   .flatMap((x) => x);
  const ownedFromCollection: number[] =
    collectionNfts?.map((nft: any) => Number(nft.metadata.id)) || [];

  const cards = currentCollection.cards;

  const filteredCards = cards.filter(
    (card) => !ownedFromCollection.includes(card.id)
  );

  return (
    <>
      <Container fluid py={{ base: 0, md: 30 }} bg={'#EAEAEA'}>
        <Flex
          py={{ base: 0, md: 12 }}
          px={24}
          bg={'#EAEAEA'}
          m={'0 0 20px 0'}
          justify={'flex-start'}
          align={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex w={isMobile ? '100%' : '400px'} ml={isMobile ? 0 : 'md'}>
            {/* <CollectionCard
              address={NFT_MEMBERSHIP_ADDRESS}
              item={membership.cards[0]}
              owned={true}
            /> */}
            <Text
              style={{
                fontSize: isMobile ? '28px' : '35px',
              }}
              c='black'
              maw={isMobile ? '100%' : '400px'}
              content='My Collection'
            />
          </Flex>
        </Flex>
      </Container>

      <Flex direction='row'>
        {Object.keys(collections).map((key: any, index) => {
          const collection: ICollection = collections[key];
          return (
            <Flex
              w={isMobile ? '100%' : 'auto'}
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
        {
          <Grid grow gutter='xl' maw='1200px'>
            {collectionNfts?.map((nft: any, index: number) => (
              <Grid.Col key={index} span={{ sm: 12, md: 6, xl: 4 }}>
                <CollectionCard
                  w='250px'
                  address={currentCollection.address}
                  metadata={nft.metadata}
                  owned={true}
                  showTitle
                />
              </Grid.Col>
            ))}
            {filteredCards.map((item: ICardItem) => (
              <Grid.Col key={item.name} span={{ sm: 12, md: 6, xl: 4 }}>
                <CollectionCard
                  w='250px'
                  address={currentCollection.address}
                  item={item}
                  owned={false}
                  showTitle
                />
              </Grid.Col>
            ))}
          </Grid>
        }
      </Flex>
    </>
  );
};

export default CollectionsPage;
