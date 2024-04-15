import { Container, Flex, Grid, Image, em } from '@mantine/core';
import Text from '@/components/Text';
import { useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import React, { useMemo, useState } from 'react';
import { CURRENT_COLLECTIONS } from '@/constants/collections';
import { ICardItem, ICollection } from '@/types';
import { useMediaQuery } from '@mantine/hooks';
import { CollectionCard, CARD_WIDTH } from './collection.card';
import { useActiveAccount } from 'thirdweb/react';

const CollectionsPage = () => {
  const account = useActiveAccount();
  const address = account?.address;

  // const MEMBERSHIP_TOKEN_ID = 1;
  // const { data: membershipContract } = useContract(NFT_MEMBERSHIP_ADDRESS);
  const [currentCollection, setCurrentCollection] = useState<ICollection>(
    CURRENT_COLLECTIONS[0],
  );
  const { data: collectionContract } = useContract(currentCollection.address);
  const CollectionCardMemo = React.memo(CollectionCard);

  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const isTablet = useMediaQuery(`(max-width: ${em(1000)})`);
  // const {
  //   data: memberNFTs,
  //   isLoading: membershipNFTLoading,
  //   isFetched: fetchedMembershipNFT,
  // } = useOwnedNFTs(membershipContract, address);

  const { data: ownedNfts, isLoading: collectionIsLoading } = useOwnedNFTs(
    collectionContract,
    address,
  );

  const cards = currentCollection.cards;
  const ownedFromCurrentCollection = useMemo(() => {
    const currentCollectionIds = new Set(
      currentCollection.cards.map((card) => card.id),
    );
    return (
      ownedNfts?.filter((nft) =>
        currentCollectionIds.has(Number(nft.metadata.id)),
      ) || []
    );
  }, [ownedNfts, currentCollection]);

  const ownedFromCollection = useMemo(() => {
    return ownedNfts?.map((nft) => Number(nft.metadata.id)) || [];
  }, [ownedNfts]);

  const filteredCards = useMemo(() => {
    const ownedIds = new Set(
      ownedFromCurrentCollection.map((nft) => Number(nft.metadata.id)),
    );
    return cards
      .filter((card) => !ownedIds.has(Number(card.id)))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [cards, ownedFromCurrentCollection]);

  // Reorder collections based on current selection and device type
  const reorderedCollections = useMemo(() => {
    const index = CURRENT_COLLECTIONS.findIndex(
      (collection) => collection.id === currentCollection.id,
    );
    if (index === -1) return CURRENT_COLLECTIONS;

    const reordered = [...CURRENT_COLLECTIONS];
    const [selectedCollection] = reordered.splice(index, 1);
    if (isMobile) {
      // Move selected collection to the end for mobile
      reordered.push(selectedCollection);
    } else {
      // Move selected collection to the start for web
      reordered.unshift(selectedCollection);
    }
    return reordered;
  }, [currentCollection, isMobile]);

  return (
    <>
      <Container
        fluid
        py={{ base: 0, md: 30 }}
        pt={{ base: 15, md: 60 }}
        bg={'#EAEAEA'}
      >
        <Flex
          py={{ base: 0, md: 12 }}
          px={{ base: 0, md: 24 }}
          bg={'#EAEAEA'}
          m={'20px 0'}
          justify={'flex-start'}
          align={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex
            w={isMobile ? '100%' : '400px'}
            ml={isMobile ? 0 : 'md'}
            mt={{ base: 'xl', xl: '0' }}
          >
            {/* <CollectionCard
              address={NFT_MEMBERSHIP_ADDRESS}
              item={membership.cards[0]}
              owned={true}
            /> */}
            <Text
              style={{
                fontSize: isMobile ? '28px' : '35px',
              }}
              c="black"
              maw={isMobile ? '100%' : '400px'}
              content="My Collection"
            />
          </Flex>
        </Flex>
      </Container>

      <Flex direction={{ base: 'column', md: 'row' }}>
        {reorderedCollections.map((collection: ICollection, index: number) => {
          return (
            <Flex
              w={isMobile ? '100%' : 'auto'}
              onClick={() => setCurrentCollection(collection)}
              key={index}
              direction={'row'}
              align={'center'}
              justify={{ base: 'flex-start', md: 'center' }}
              pos="relative"
              gap="16px"
              bg={collection.color}
              p={20}
              px={{ base: 0, md: index === 0 ? 64 : 32 }}
              pr={{ base: 0, md: 42 }}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={
                  collection.name === 'Lifetime Passes'
                    ? '/images/icons/star.svg'
                    : `/images/icons/smiley_${(index % 3) + 1}.svg`
                }
                alt={'smiley'}
                w={24}
                h={24}
                fit="contain"
              />
              <Text
                maw={{ base: '100%', md: '300' }}
                color={collection?.fontColor || 'black'}
                content={`${collection.name} Collection`}
              />
            </Flex>
          );
        })}
      </Flex>
      <Flex
        p={{ base: 32, md: 64 }}
        justify={'center'}
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: currentCollection.color,
        }}
      >
        {
          <Grid
            gutter={{ base: 'xl', md: 'md' }}
            justify={isMobile ? 'center' : 'flex-start'}
            w="100%"
            maw="1200px"
          >
            {ownedFromCurrentCollection?.map((nft: any, index: number) => (
              <Grid.Col key={index} span={{ base: 0, sm: 3.5, md: 4 }}>
                <CollectionCardMemo
                  w={
                    isMobile
                      ? 139
                      : isTablet
                      ? CARD_WIDTH * (2 / 3)
                      : CARD_WIDTH
                  }
                  address={currentCollection.address}
                  metadata={nft.metadata}
                  owned={true}
                  showTitle
                  fontColor={currentCollection?.fontColor || 'black'}
                />
              </Grid.Col>
            ))}
            {filteredCards.map((item: ICardItem) => (
              <Grid.Col key={item.name} span={{ base: 0, sm: 3, md: 4 }}>
                <CollectionCardMemo
                  w={
                    isMobile
                      ? 139
                      : isTablet
                      ? CARD_WIDTH * (2 / 3)
                      : CARD_WIDTH
                  }
                  address={currentCollection.address}
                  item={item}
                  owned={false}
                  fontColor={currentCollection?.fontColor || 'black'}
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
