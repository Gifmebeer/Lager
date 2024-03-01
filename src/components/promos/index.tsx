import React from 'react';
import { Container, SimpleGrid, Image, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CURRENT_PROMOS } from '@/constants/promos';

import Text from '../Text';

const data = CURRENT_PROMOS;

const Promos: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);

  return (
    <Container bg='#EAEAEA' mih='30vh' mt={{ base: 'lg', md: 'xl' }}>
      <Text
        style={{
          fontSize: isMobile ? '28px' : '35px',
        }}
        c='black'
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
