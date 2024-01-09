'use client';

import { AppShell, Container, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ConnectWallet } from '@thirdweb-dev/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface IHeader {
  children: ReactNode;
  isLanding?: boolean;
  noPadding?: boolean;
}

function Header({ children, isLanding, noPadding }: IHeader) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: '200px', offset: false }}>
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
              <Image w={'120px'} src='/images/gmb_logo.svg' alt='Logo' />
            </Link>
          )}
          <ConnectWallet
            btnTitle='LOGIN'
            className={'connectButton'}
            switchToActiveChain={true}
            modalSize={'compact'}
          />
        </Flex>
      </AppShell.Header>
      <AppShell.Main pt={isLanding || noPadding ? 0 : '200px'}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default Header;
