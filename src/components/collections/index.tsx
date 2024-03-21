import {
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Overlay,
  Transition,
  em,
} from '@mantine/core';
import Text from '@/components/Text';
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { NFT_COLLECTION_ADDRESS } from '@/constants/addresses';
import { NFTCard } from '../NFTCard';
import React, { useMemo, useRef, useState } from 'react';
import { CURRENT_COLLECTIONS } from '@/constants/collections';
import { ICardItem, ICollection } from '@/types';
import { useMediaQuery, useClickOutside } from '@mantine/hooks';

const CARD_WIDTH = 290;
const CollectionCard: React.FC<{
  w?: number;
  item?: ICardItem | any;
  metadata?: any;
  showTitle?: boolean;
  address?: string;
  fontColor?: string;
  owned: boolean;
}> = ({ w = 300, item, owned, metadata, showTitle, address, fontColor }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const cardRef = useClickOutside(
    () => setIsZoomed(false),
    ['mouseup', 'touchend'],
  );

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <>
      <Transition transition="fade" duration={400} mounted={isZoomed}>
        {(styles) => (
          <Overlay
            color="#000"
            zIndex={999} // Ensure it's below the zoomed item but above everything else
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              ...styles,
              transition: 'opacity 0.5s ease-in-out',
              opacity: isZoomed ? 0.75 : 0,
            }}
          />
        )}
      </Transition>
      <Card
        w={w}
        ref={cardRef}
        bg="transparent"
        mb="lg"
        onClick={(e) => {
          e.stopPropagation();
          toggleZoom();
        }}
        style={{
          position: isZoomed ? 'fixed' : 'relative',
          zIndex: isZoomed ? 1000 : 0,
          transition: 'transform 0.3s ease, left 0.3s ease, top 0.3s ease',
          transformOrigin: 'center',
          margin: isZoomed ? 'auto' : '0',
          maxWidth: isZoomed ? '90%' : 'initial', // Adjust if necessary
          maxHeight: isZoomed ? '90vh' : 'initial', // Adjust for viewport height, maintaining aspect ratio
          cursor: 'pointer',
          // Centering adjustments
          left: isZoomed ? '50%' : 'unset',
          top: isZoomed ? '50%' : 'unset',
          transform: isZoomed
            ? 'translate(-50%, -50%) scale(1.8)'
            : 'translate(0, 0) scale(1)',
          overflow: 'hidden',
        }}
      >
        <Card.Section>
          <Card.Section m={0} opacity={owned || isZoomed ? 1 : 0.5}>
            {metadata ? (
              <NFTCard
                w={w}
                metadata={metadata}
                key={metadata.id}
                address={address}
              />
            ) : (
              item && (
                <Image
                  w={w}
                  src={item.imageUrl}
                  alt={item.name}
                  fit="contain"
                />
              )
            )}
          </Card.Section>
          {!owned && (
            <Image
              w={{ base: w / 2, sm: (w * 1) / 3 }}
              m={0}
              p={0}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 20,
              }}
              src={'/images/icons/missing_corner.svg'}
              alt={'missing'}
              fit="contain"
            />
          )}
        </Card.Section>
        <Card.Section>
          <Group my={{ base: 6, md: 12 }} justify="center">
            {showTitle && !isZoomed && (
              <Text
                size={'md'}
                ff={'GT-America'}
                c={fontColor}
                style={{
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  textAlign: 'center',
                }}
                content={metadata ? metadata.name : item && item.name}
              />
            )}
          </Group>
        </Card.Section>
      </Card>
    </>
  );
};

const CollectionsPage = () => {
  // const MEMBERSHIP_TOKEN_ID = 1;
  // const { data: membershipContract } = useContract(NFT_MEMBERSHIP_ADDRESS);
  const { data: collectionContract } = useContract(NFT_COLLECTION_ADDRESS);
  const address = useAddress();
  const [currentCollection, setCurrentCollection] = useState<ICollection>(
    CURRENT_COLLECTIONS[0],
  );
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
    return cards.filter((card) => !ownedIds.has(card.id));
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
                src={`/images/icons/smiley_${(index % 3) + 1}.svg`}
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
