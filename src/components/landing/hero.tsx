import React from 'react';
import { Image, Flex, BackgroundImage, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const HeroPage = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  return (
    <BackgroundImage src="/images/led_background.svg">
      <Flex
        maw="1720px"
        h={{ base: '80vh', md: '100vh' }}
        justify={'center'}
        align={'center'}
        m="auto"
      >
        {!isMobile && (
          <Flex
            h="80%"
            w={{ base: '60%', md: '30%' }}
            pos={{ base: 'absolute', sm: 'relative' }}
            justify={'flex-start'}
            align={'start'}
            mx={{ base: 'lg', md: 0 }}
            mt={{ base: '100px', md: 0 }}
          >
            <Image
              w={{ base: '100%', md: '400px' }}
              src="/images/gmb_logo.svg"
              alt="Logo"
            />
          </Flex>
        )}
        <Flex
          w={{ base: '100%', md: '50%' }}
          justify={'flex-end'}
          align={'end'}
          mx={{ base: 'lg', md: 0 }}
          mt={{ base: '130px', md: 0 }}
        >
          <Image src="/images/landing_beers.png" alt="Beers" />
        </Flex>
      </Flex>
    </BackgroundImage>
  );
};

export default HeroPage;
