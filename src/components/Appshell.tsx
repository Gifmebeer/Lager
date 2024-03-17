import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppShell, Flex, rem, em, Image, Button } from '@mantine/core';
import { useDisconnect, useConnectionStatus } from '@thirdweb-dev/react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useHeadroom, useMediaQuery } from '@mantine/hooks';
import Footer from './Footer';
import Text from './Text';
import ConnectWalletBtn from './ConnectWallet';

interface IHeader {
  children: ReactNode;
  isLanding?: boolean;
  noPadding?: boolean;
  noLogin?: boolean;
  isClaim?: boolean;
  isRegular?: boolean;
}

const IS_PRELAUNCH = false;

const Wallet = ({ isConnected }: any) => {
  return (
    <ConnectWalletBtn
      btntitle="LOGIN"
      className={isConnected ? 'connectButtonDefault' : 'connectButton'}
    />
  );
};

function Header({
  children,
  isLanding,
  noPadding,
  noLogin,
  isClaim,
  isRegular,
}: IHeader) {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const disconnect = useDisconnect();
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === 'connected';
  const pinned = useHeadroom({ fixedAt: 50 });
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <AppShell
      header={{
        height: isMobile ? 100 : 180,
        collapsed: isMobile ? false : !isMenuOpen && !pinned,
        offset: false,
      }}
    >
      <AppShell.Header
        withBorder={false}
        bg={isLanding || noPadding ? 'transparent' : 'rgba(226,226,226,1)'}
      >
        {((isClaim && !isMobile) || !isMobile) && (
          <Flex
            style={{
              background: isClaim
                ? 'transparent'
                : isMobile
                ? 'white'
                : isLanding
                ? ''
                : 'white',
            }}
            p={isMobile ? 'lg' : '32px'}
            align={'center'}
            justify={
              isMobile
                ? 'space-between'
                : isLanding
                ? 'flex-end'
                : 'space-between'
            }
          >
            {(!isLanding || !!isMobile) && (
              <Link href="/" legacyBehavior>
                <Image
                  w={isMobile ? '74px' : isRegular ? '74px' : '150px'}
                  src="/images/gmb_logo.svg"
                  alt="Logo"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            )}

            <Flex
              direction="column"
              align={'flex-end'}
              gap="10px"
              mt={isLanding ? 'lg' : 0}
            >
              {!IS_PRELAUNCH && !noLogin && (
                <Flex maw={{ base: '163px', md: '100%' }}>
                  <Wallet isConnected={!!isConnected} />
                </Flex>
              )}
              {isLanding && !isMobile && (
                <Button
                  maw={'230px'}
                  bg={'#C5C4C6'}
                  c={'black'}
                  style={{ borderRadius: 10 }}
                  onClick={() => {
                    router.push('/collections');
                  }}
                >
                  <Text content={'My Collections'} />
                </Button>
              )}
            </Flex>
          </Flex>
        )}
        {isMobile && !isMenuOpen && (
          <Flex
            mih={'36px'}
            m={0}
            p={0}
            direction="column"
            bg={isClaim ? 'black' : '#FFFFFF'}
            justify={isMobile ? 'space-between' : 'flex-end'}
          >
            <Flex align={'center'} justify={'space-between'} gap="xl">
              <Link href="/" legacyBehavior>
                <Image
                  w={isMobile ? '74px' : '120px'}
                  src="/images/gmb_logo.svg"
                  alt="Logo"
                  m={isMobile ? 'sm' : 0}
                  style={{ cursor: 'pointer' }}
                />
              </Link>
              {!IS_PRELAUNCH && (
                <Flex mr={12}>
                  <Wallet isConnected={!!isConnected} />
                </Flex>
              )}
            </Flex>

            <Flex
              h={50}
              p="md"
              bg="black"
              align={'center'}
              justify={'flex-end'}
            >
              <IconMenu2
                color="white"
                style={{ width: rem(32), height: rem(32) }}
                stroke={1.5}
                onClick={toggleMenu}
              />
            </Flex>
          </Flex>
        )}
        {isMenuOpen && (
          <Flex
            bg={'black'}
            direction="row-reverse"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10000,
              overflowY: 'hidden',
            }}
          >
            <IconX
              color="white"
              style={{ width: rem(32), height: rem(32), margin: '8px' }}
              stroke={1.5}
              onClick={toggleMenu}
            />
            <Flex
              direction="column"
              align="flex-start"
              justify="flex-start"
              gap={'lg'}
              p={'50px 0 20px 20px'}
              style={{ width: '100%' }}
            >
              <Link href="/" onClick={toggleMenu}>
                <Text content={'Home'} c="white" size="xl" />
              </Link>
              <Link href="/collections" onClick={toggleMenu}>
                <Text content={'My Collections'} c="white" size="xl" />
              </Link>
              <Link href="/promos" onClick={toggleMenu}>
                <Text content={'Promotions'} c="white" size="xl" />
              </Link>
              {isConnected && (
                <div
                  onClick={async () => {
                    await disconnect();
                    toggleMenu();
                  }}
                >
                  <Text content={'Logout →'} c="#234FFF" size="lg" />
                </div>
              )}
            </Flex>
          </Flex>
        )}
      </AppShell.Header>
      <AppShell.Main
        bg={isLanding ? 'none' : '#EAEAEA'}
        pt={isLanding || noPadding ? 0 : '150px'}
      >
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default Header;
