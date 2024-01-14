import React from 'react';
import { Card, Image, Text, Title, Container, Flex, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';

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
      <Container fluid>
        <Flex w={'100%'} align={'center'} justify='center' direction={'column'}>
          <Title
            style={{
              textTransform: 'uppercase',
              fontSize: isMobile ? '4rem' : '6rem',
              fontFamily: 'var(--font-metamorbit-latin)',
            }}
            order={1}
          >
            NFTs Collections
          </Title>

          <Flex direction={{ base: 'column', lg: 'row' }} gap={'md'} mt={40}>
            {cards.map((card, index) => (
              <Link key={index} href={`/collections`}>
                <Card w={400} h={'fit-content'} bg={'transparent'}>
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
    </Flex>
  );
};

export default Collections;
