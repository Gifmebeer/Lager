import React from 'react';
import { Image, Flex, BackgroundImage, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Text from '../Text';

const Content = () => {
  return (
    <Flex direction={{ base: 'column-reverse', md: 'column' }}>
      <Flex
        direction={'column'}
        w={{ base: '100%', md: 'auto' }}
        mt={{ base: 0, md: 20 }}
        justify={'flex-start'}
        align={'start'}
      >
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          pt={{ base: '8px', md: '4px' }}
          bg='#234FFF'
          w={{ base: '100%', md: '280px' }}
          c={'white'}
          content='CROMOS DIGITALS'
        />
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          bg='#234FFF'
          w={{ base: '100%', md: '240px' }}
          c={'white'}
          content='DE LA CERVESA'
        />
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          pb={{ base: '24px', md: '8px' }}
          bg='#234FFF'
          w={{ base: '100%', md: '180px' }}
          c={'white'}
          content='ARTESANA!'
        />
      </Flex>
      <Flex mt={20} direction={'column'} justify={'flex-start'} align={'start'}>
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          pt={{ base: '16px', md: '4px' }}
          bg='#000'
          w={{ base: '100%', md: '320px' }}
          c={'#FF0'}
          content='VINE I ACONSEGUEIX'
        />
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          bg='#000'
          w={{ base: '100%', md: '240px' }}
          c={'#FF0'}
          content='EL TEU NFT AL'
        />
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          bg='#000'
          w={{ base: '100%', md: '270px' }}
          c={'white'}
          content='BARCELONA BEER'
        />
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          bg='#000'
          w={{ base: '100%', md: '250px' }}
          c={'white'}
          content='FESTIVAL 2024'
        />
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          bg='#000'
          w={{ base: '100%', md: '300px' }}
          c={'white'}
          content='22, 23, 24 DE MARÇ'
        />
        <Text
          size='lg'
          pl={{ base: 'lg', md: 'md' }}
          pb={{ base: '16px', md: '8px' }}
          bg='#000'
          w={{ base: '100%', md: '250px' }}
          c={'white'}
          content='FIRA montjuïc'
        />
      </Flex>
    </Flex>
  );
};

const HeroPage = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  return (
    <BackgroundImage src='/images/led_background.svg'>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        p={0}
        justify={'center'}
        align={'center'}
      >
        {!isMobile && (
          <Flex
            h='80%'
            w={{ base: '60%', md: '30%' }}
            pos={{ base: 'absolute', sm: 'relative' }}
            justify={'flex-start'}
            direction={'column'}
            align={'start'}
            mx={{ base: 'lg', md: 0 }}
            mt={{ base: '100px', md: 0 }}
          >
            <Image
              w={{ base: '100%', md: '307px' }}
              src='/images/gmb_logo.svg'
              alt='Logo'
            />
            <Content />
          </Flex>
        )}

        <Flex
          w={{ base: '100%', md: '50%' }}
          justify={{ base: 'flex-start', md: 'flex-end' }}
          align={'end'}
          direction={'column'}
          mx={{ base: 0 }}
          mt={{ base: '120px', md: 0 }}
        >
          {!isMobile ? (
            <Flex pos='relative'>
              <Image
                w={{ base: '100%', sm: 'auto' }}
                p={'20px'}
                src='/images/landing_beers.png'
                alt='Beers'
              />
              <Image
                pos={'absolute'}
                bottom={0}
                left={{ md: '25%', xl: '-47%' }}
                w={{ base: '200px', xl: '280px' }}
                src='/images/prelaunch_card_bbf.png'
                alt='bbf card'
              />
            </Flex>
          ) : (
            <Image
              w={{ base: '100%', sm: 'auto' }}
              p={'20px'}
              src='/images/landing_beers.png'
              alt='Beers'
            />
          )}

          {isMobile && (
            <Flex
              pos='relative'
              w='100vw'
              justify={'center'}
              direction={'column'}
              p={0}
              m={0}
              mt={'150px'}
            >
              <Flex w='100vw' align={'center'} justify={'center'}>
                <Image
                  pos={'absolute'}
                  top={-240}
                  w={{ base: '220px' }}
                  src='/images/prelaunch_card_bbf.png'
                  alt='bbf card'
                />
              </Flex>
              <Content />
            </Flex>
          )}
        </Flex>
      </Flex>
    </BackgroundImage>
  );
};

export default HeroPage;
