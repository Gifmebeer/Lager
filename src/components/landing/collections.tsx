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
import { useActiveWalletConnectionStatus } from 'thirdweb/react';
import { useRouter } from 'next/navigation';
import ConnectWalletBtn from '../ConnectWallet';

const cards = [
  {
    title: 'Breweries Collection',
    type: 'brewery',
    address: '0x0000...0000',
    image: '/images/collections/op-sepolia-test/synera_brewery.png',
    icon: '/images/icons/smiley_3.svg',
  },
  {
    title: 'Beers Collection',
    type: 'beers',
    address: '0x0000...0000',
    image: '/images/collections/op-sepolia-test/synera_amber_ale.png',
    icon: '/images/icons/smiley_3.svg',
  },
];

const Collections = () => {
  const router = useRouter();
  const connectionStatus = useActiveWalletConnectionStatus();
  const isConnected = connectionStatus === 'connected';
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  return (
    <Flex
      w={'100%'}
      pt={50}
      pb={100}
      bg={'rgba(53, 210, 193, 1)'}
      align={'center'}
      justify="center"
      direction={'column'}
    >
      <Container fluid mb={'lg'}>
        <Flex w={'100%'} align={'center'} justify="center" direction={'column'}>
          <Title
            style={{
              textTransform: 'uppercase',
              fontSize: isMobile ? '1.5rem' : '6rem',
              fontFamily: 'var(--font-metamorbit-latin)',
            }}
            order={1}
          >
            NFT Collections
          </Title>

          <Flex direction={{ base: 'column', lg: 'row' }} gap={'md'} mt={40}>
            {cards.map((card, index) => (
              <Link key={index} href={`/collections`}>
                <Card
                  w={{ base: 300, md: 400 }}
                  h={'fit-content'}
                  bg={'transparent'}
                >
                  <Flex
                    style={{ textAlign: 'center' }}
                    direction="column"
                    justify={'center'}
                    align={'center'}
                  >
                    <Image src={card.image} alt="img" height={200} />
                    <Flex
                      mt={14}
                      pl={20}
                      maw={'200px'}
                      align={'center'}
                      justify={'center'}
                      dir="row"
                    >
                      <img
                        src={card.icon}
                        alt="icon"
                        width={'16px'}
                        height={'16px'}
                      />
                      <Text
                        style={{
                          textAlign: 'left',
                          marginLeft: '12px',
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
        <ConnectWalletBtn
          btntitle="LOG IN TO SEE ALL COLLECTIONS"
          className={'connectButton2'}
        />
      ) : (
        <Button
          onClick={() => router.push('/collections')}
          className="connectButton2"
          variant="light"
        >
          SEE ALL COLLECTIONS
        </Button>
      )}
    </Flex>
  );
};

export default Collections;
