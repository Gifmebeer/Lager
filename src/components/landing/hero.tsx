import React from 'react';
import { Image, Flex, BackgroundImage } from '@mantine/core';

const HeroPage = () => {
  return (
    <BackgroundImage src='/images/led_background.svg'>
      <Flex h={'100vh'} justify={'center'} align={'center'}>
        <Flex h='80%' w='30%' justify={'flex-start'} align={'start'}>
          <Image w={'400px'} src='/images/gmb_logo.svg' alt='Logo' />
        </Flex>
        <Flex
          w={{ base: '100%', md: '50%' }}
          h={'80%'}
          justify={'flex-end'}
          align={'end'}
        >
          <Image
            src='/images/landing_beers.png'
            alt='Beers'
            h={{ base: '300px', sm: '400px', lg: '650px' }}
          />
        </Flex>
      </Flex>
    </BackgroundImage>
  );
};

export default HeroPage;
