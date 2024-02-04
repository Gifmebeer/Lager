import { AppShell, Flex, Image } from '@mantine/core';
import { ConnectWallet, darkTheme } from '@thirdweb-dev/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import Footer from './Footer';

interface IHeader {
  children: ReactNode;
  isLanding?: boolean;
  noPadding?: boolean;
  noLogin?: boolean;
}

function Header({ children, isLanding, noPadding, noLogin }: IHeader) {
  return (
    <AppShell header={{ height: '0', offset: false }}>
      <AppShell.Header
        withBorder={false}
        bg={isLanding || noPadding ? 'transparent' : 'rgba(226,226,226,1)'}
      >
        <Flex
          p={'32px 64px'}
          justify={isLanding ? 'flex-end' : 'space-between'}
        >
          {!isLanding && (
            <Link href='/' legacyBehavior>
              <Image
                w={'120px'}
                src='/images/gmb_logo.svg'
                alt='Logo'
                style={{ cursor: 'pointer' }}
              />
            </Link>
          )}
          {!noLogin && (
            <ConnectWallet
              btnTitle='LOGIN'
              className={'connectButton'}
              switchToActiveChain={true}
              modalSize={'compact'}
              theme={darkTheme({
                colors: {
                  modalBg: 'black',
                  primaryText: 'white',
                  accentText: 'rgba(36, 195, 171, 1)',
                  primaryButtonText: 'white',
                  secondaryButtonText: 'rgba(36, 195, 171, 1)',
                  secondaryText: 'darkgray',
                  accentButtonText: 'white',
                  accentButtonBg: 'rgba(36, 195, 171, 1)',
                },
              })}
            />
          )}
        </Flex>
      </AppShell.Header>
      <AppShell.Main pt={isLanding || noPadding ? 0 : '200px'}>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default Header;
