import React from 'react';
import { Container, SimpleGrid, Image, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Text from '../Text';

const data = [
  {
    image: '/images/promos/horizontal-01.png',
    title: 'promo 1',
    category: 'promo',
  },
  {
    image: '/images/promos/vertical-01.png',
    title: 'promo 2',
    category: 'promo',
  },
  {
    image: '/images/promos/horizontal-02.png',
    title: 'promo 3',
    category: 'promo',
  },
  {
    image: '/images/promos/vertical-02.png',
    title: 'promo 4',
    category: 'promo',
  },
];

const Promos: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);

  return (
    <Container bg='#EAEAEA' mih='30vh'>
      <Text
        style={{
          fontSize: isMobile ? '28px' : '35px',
        }}
        c='black'
        mt={{ base: 0, md: 'lg' }}
        maw={isMobile ? '100%' : '500px'}
        content='Active Promotions'
      />
      <SimpleGrid
        cols={isMobile ? 1 : 2}
        spacing={{ base: 'lg', md: 'xl' }}
        my='50px'
      >
        {data.map((promo, index) => (
          <div
            key={index}
            style={{ padding: isMobile ? '40px 10px' : '0 50px' }}
          >
            <Image src={promo.image} alt={promo.title} />
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Promos;
