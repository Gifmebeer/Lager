import React from 'react';
import {
  Button,
  Card,
  Image,
  Text,
  Title,
  Container,
  Flex,
  em,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { ConnectWallet, useConnectionStatus } from '@thirdweb-dev/react';
import { useRouter } from 'next/navigation';

const cards = [
  {
    title: 'GifmeBeer Membership',
    type: 'membership',
    address: '0x0000...0000',
    image: '/images/collections/membership_card.png',
    icon: '/images/icons/smiley_3.svg',
  },
  {
    title: 'Breweries Collection',
    type: 'brewery',
    address: '0x0000...0000',
    image: '/images/collections/brewery_card.png',
    icon: '/images/icons/smiley_3.svg',
  },
  {
    title: 'Festivals Collection',
    type: 'festival',
    address: '0x0000...0000',
    image: '/images/collections/festival_card.png',
    icon: '/images/icons/smiley_3.svg',
  },
];

const Collections = () => {
  const router = useRouter();
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === 'connected';
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  return (
    <Flex
      w={'100%'}
      py={100}
      bg={'rgba(53, 210, 193, 1)'}
      align={'center'}
      justify='center'
      direction={'column'}
    >
      <Container fluid mb={'lg'}>
        <Flex w={'100%'} align={'center'} justify='center' direction={'column'}>
          <Title
            style={{
              textTransform: 'uppercase',
              fontSize: isMobile ? '2rem' : '6rem',
              fontFamily: 'var(--font-metamorbit-latin)',
            }}
            order={1}
          >
            NFTs Collections
          </Title>

          <Flex direction={{ base: 'column', lg: 'row' }} gap={'md'} mt={40}>
            {cards.map((card, index) => (
              <Link key={index} href={`/collections`}>
                <Card
                  w={{ base: 300, md: 400 }}
                  h={'fit-content'}
                  bg={'transparent'}
                >
                  <Flex direction='column' align={'center'} gap='md'>
                    <Image src={card.image} alt='img' height={200} />
                    <Flex
                      mt={14}
                      w={'200px'}
                      align={'center'}
                      justify={'center'}
                      dir='row'
                      gap={12}
                    >
                      <img
                        src={card.icon}
                        alt='icon'
                        width={'16px'}
                        height={'16px'}
                      />
                      <Text
                        style={{
                          fontFamily: 'var(--font-metamorbit-latin)',
                        }}
                      >
                        {card.title}
                      </Text>
                    </Flex>
                  </Flex>
                </Card>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
      {!isConnected ? (
        <ConnectWallet
          btnTitle='LOG IN TO SEE ALL COLLECTIONS'
          className={'connectButton2'}
          switchToActiveChain={true}
          modalSize={'compact'}
        />
      ) : (
        <Button
          onClick={() => router.push('/collections')}
          className='connectButton2'
          variant='light'
        >
          SEE ALL COLLECTIONS
        </Button>
      )}
    </Flex>
  );
};

export default Collections;
