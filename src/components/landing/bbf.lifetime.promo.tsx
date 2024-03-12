import { useRouter } from 'next/router';
import { Button, Flex, Image, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Text from '../Text';
import { CURRENCY_SYMBOL } from '@/constants/lifetimepass/BBF2024';

const BBFPromo = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const router = useRouter();
  return (
    <>
      <Flex
        w="100%"
        miw="277px"
        pt={'lg'}
        bg="linear-gradient(180deg, #2647CD 0%, #0D2175 100%)"
        direction={{ base: 'column' }}
        align={'center'}
        justify={'center'}
      >
        <Flex
          w="100%"
          mah={{ base: '100%', md: '300px' }}
          direction={{ base: 'column', md: 'row-reverse' }}
          justify={{ base: 'center', md: 'space-evenly' }}
          align={{ base: 'center', md: 'normal' }}
          my={'xl'}
        >
          <Flex direction={'column'}>
            <Text
              content="VIP Lifetime Pass"
              size={isMobile ? 'xl' : '38px'}
              c={'white'}
            />
            <Text
              content="Barcelona Beer Festival"
              size={isMobile ? 'sm' : '22px'}
              mt={isMobile ? '0' : 'xs'}
              c={'white'}
            />
            <Flex
              display={{ base: 'none', md: 'flex' }}
              w={{ base: '260px', md: '589px' }}
              mt={'xl'}
            >
              <Text
                c={'white'}
                ff={'GT-America'}
                size="16px"
                lh="20px"
                content={`The Lifetime Pass collection is available on Optimism Mainnet and 150 of a total of 160 NFTs will be offered for public minting. The first 50 passes can be minted for 500 ${CURRENCY_SYMBOL} on early bird until March 21st 11:59pm CET when the Barcelona Beer Festival will launch. After that date price will increase to 650 ${CURRENCY_SYMBOL}. Max, two mints per address.`}
              />
            </Flex>
            <Flex
              display={{ base: 'none', md: 'flex' }}
              my="xs"
              pt={{ base: 'xs', md: 'lg' }}
              w="100%"
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <Button
                bg={'#FF0'}
                c={'black'}
                style={{ borderRadius: 12 }}
                onClick={() => {
                  router.push('/lifetimepass/bbf');
                }}
              >
                <Text content={'BUY NOW'} />
              </Button>
            </Flex>
          </Flex>
          <Flex pos="relative" direction={'column'}>
            <Image
              w={{ base: 236, md: 280 }}
              my={'xl'}
              pos={{ base: 'relative' }}
              top={{ base: 0, md: '-150px' }}
              src="/images/collections/bbf_lifetime_pass_2024.png"
              alt={'bbf'}
              fit="contain"
              style={{ boxShadow: '-15px 15px 30px 0px rgba(0, 0, 0, 0.25)' }}
            />
            <Flex
              display={{ base: 'flex', md: 'none' }}
              my="xs"
              w="100%"
              justify={'center'}
            >
              <Button
                bg={'#FF0'}
                c={'black'}
                style={{ borderRadius: 12 }}
                onClick={() => {
                  router.push('/lifetimepass/bbf');
                }}
              >
                <Text content={'BUY NOW'} />
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          mt={'xl'}
          px="12px"
          bg="#FF0"
          w="100%"
          h={'47px'}
          align={'center'}
          justify={'center'}
        >
          <Text
            style={{ textAlign: 'center' }}
            content="SÍGUENOS PARA ESTAR AL DÍA DEL SORTEO DEL bbf Y PROMOCIONES"
            c="black"
            lh={{ base: '19px', md: '34px' }}
            size="13px"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default BBFPromo;
