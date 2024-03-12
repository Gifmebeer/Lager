import React from 'react';
import { Image, Flex, BackgroundImage, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Text from '../Text';

const Content = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const isTablet = useMediaQuery(`(max-width: ${em(1000)})`);

  return (
    <Flex direction={{ base: 'column-reverse', md: 'column' }}>
      <Flex
        bg="black"
        w={{ base: 'auto', md: '257px' }}
        h={{ base: 'auto', md: '257px' }}
        py={20}
        direction={'column'}
        mt={{ base: 0, xl: 'xl' }}
        ml={{ base: '0', xl: '100px' }}
        justify={{ base: 'flex-start', md: 'center' }}
        align={{ base: 'start', md: 'center' }}
        style={{
          zIndex: isMobile ? 1 : 2,
          borderRadius: isTablet ? '0' : '257px',
        }}
      >
        <Text
          size={isMobile ? 'lg' : '17px'}
          pl={{ base: 'lg', md: '0' }}
          pt={{ base: '52px', md: '0' }}
          bg="#000"
          w={{ base: '100%', md: '190px' }}
          c={'#FF0'}
          ff={'GT-America'}
          content="Ven al Barcelona Beer Festival y consigue tu primer coleccionable!!"
        />
        <Text
          size={isMobile ? 'lg' : '17px'}
          pl={{ base: 'lg', md: 0 }}
          pt={{ base: '0', md: '4px' }}
          bg="#000"
          w={{ base: '100%', md: '190px' }}
          c={'white'}
          ff={'GT-America'}
          content="Participa en el sorteo de camisetas, cervezas especiales,..."
        />
      </Flex>
    </Flex>
  );
};

const HeroPage = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  return (
    <BackgroundImage src="/images/led_background.svg">
      <Flex
        maw="1440px"
        h={{ base: 'auto', md: '100vh' }}
        p={0}
        justify={'center'}
        align={'center'}
        m="auto"
        pt={60}
      >
        {!isMobile ? (
          <Flex
            h="80%"
            w={{ base: '60%', md: '30%' }}
            pos={{ base: 'absolute', sm: 'relative' }}
            justify={'flex-start'}
            direction={'column'}
            align={'start'}
            mx={{ base: 'lg', md: 0 }}
            mt={{ base: '100px', md: 0 }}
          >
            <Image
              w={{ base: '100%', md: '80%', xl: '228px' }}
              src="/images/gmb_logo.svg"
              alt="Logo"
            />
            <Content />
          </Flex>
        ) : (
          <Flex
            bg="#EAEAEA"
            w="100%"
            h={'37px'}
            pos="absolute"
            top={145}
            align={'center'}
            justify={'center'}
          >
            <Text
              content="COLLECT YOUR CRAFT BEER EXPERIENCES"
              c="black"
              lh="28px"
              size="13px"
            />
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
            <Flex pos="relative">
              <Image
                w={{ base: '100%', sm: 'auto' }}
                p={'20px'}
                src="/images/landing_beers.png"
                alt="Beers"
              />
              <Image
                pos={'absolute'}
                bottom={{ md: 0, xl: '40%' }}
                left={{ md: '25%', xl: '-70%' }}
                w={{ base: '200px', xl: '220px' }}
                style={{ transform: 'rotate(9.684deg)' }}
                src="/images/prelaunch_card_bbf.gif"
                alt="bbf card"
              />
            </Flex>
          ) : (
            <Image
              w={{ base: '100%', sm: 'auto' }}
              p={'20px'}
              src="/images/landing_beers.png"
              alt="Beers"
            />
          )}

          {isMobile && (
            <Flex
              pos="relative"
              w="100vw"
              justify={'center'}
              direction={'column'}
              p={0}
              m={0}
              mt={'50px'}
            >
              <Flex w="100vw" align={'center'} justify={'center'}>
                <Image
                  pos={'absolute'}
                  top={-200}
                  w={{ base: '182px' }}
                  src="/images/prelaunch_card_bbf.gif"
                  alt="bbf card"
                  style={{ zIndex: 3, transform: 'rotate(9.684deg)' }}
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
