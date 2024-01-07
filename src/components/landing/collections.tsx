import React from 'react';
import { Card, Image, Text, Title, Container, Flex } from '@mantine/core';

const cards = [
  {
    title: 'GifmeBeer Membershio',
    type: 'membership',
    address: '0x0000...0000',
    image: '/images/collections/membership_card.png',
  },
  {
    title: 'Breweries Collection',
    type: 'brewery',
    address: '0x0000...0000',
    image: '/images/collections/brewery_card.png',
  },
  {
    title: 'Festivals Collection',
    type: 'festival',
    address: '0x0000...0000',
    image: '/images/collections/festival_card.png',
  },
];

const Collections = () => {
  return (
    <Container my={100}>
      <Flex align={'center'} justify='center' direction={'column'}>
        <Title order={1} style={{ marginBottom: '2rem' }}>
          Collections
        </Title>
        <Flex wrap={'wrap'} gap={'sm'}>
          {cards.map((card) => (
            <Card shadow='xs' style={{ width: '300px' }}>
              <Image src={card.image} alt='Image 1' height={200} />
              <Text style={{ marginTop: '1rem' }}>
                <span style={{ marginRight: '0.5rem' }}>icon</span>
                {card.title}
              </Text>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Collections;
