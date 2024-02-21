import React from 'react';
import { Container, Image } from '@mantine/core';

const MobileImageContainer = () => {
  return (
    <Container
      fluid
      bg='white'
      w='100%'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '60px 0',
        margin: 0,
      }}
    >
      <Image
        src='/images/ads/bbf-2024.svg'
        alt='Image'
        w={{ base: '100%' }}
        h={{ base: '100%', sm: '150px', md: '200px' }}
      />
    </Container>
  );
};

export default MobileImageContainer;
