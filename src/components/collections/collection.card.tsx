import React, { useState } from 'react';
import { Card, Group, Image, Overlay, Transition, Modal } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { ICardItem } from '@/types';
import Text from '../Text';
import { NFTCard } from '../NFTCard';

export const CARD_WIDTH = 290;
export const CollectionCard: React.FC<{
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
            blur={3}
            bg={'transparent'}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              padding: 0,
              width: '100vw',
              height: '100%',
              ...styles,
              transition: 'opacity 0.5s ease-in-out',
              opacity: isZoomed ? 0.75 : 0,
            }}
            onClick={() => setIsZoomed(false)}
          />
        )}
      </Transition>
      <Modal
        opened={isZoomed}
        onClose={() => setIsZoomed(false)}
        size="large"
        withCloseButton={false}
        centered
        styles={{
          content: {
            backgroundColor: 'transparent',
          },
          inner: {
            backgroundColor: 'transparent',
          },
          body: {
            backgroundColor: 'transparent',
            padding: 0,
          },
        }}
      >
        {metadata ? (
          <NFTCard w={w * 2} metadata={metadata} address={address} />
        ) : item ? (
          <Image w={w * 2} src={item.imageUrl} alt={item.name} fit="contain" />
        ) : null}
      </Modal>
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
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <Card.Section>
          <Card.Section m={0} opacity={owned ? 1 : 0.5}>
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
            {showTitle && (
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

export default CollectionCard;
