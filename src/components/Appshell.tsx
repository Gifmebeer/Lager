'use client';

import { AppShell, Container, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ConnectWallet } from '@thirdweb-dev/react';
import { ReactNode } from 'react';

interface IHeader {
  children: ReactNode;
  isLanding?: boolean;
}

function Header({ children, isLanding }: IHeader) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: '200px', offset: false }}>
      <AppShell.Header
        withBorder={false}
        bg={isLanding ? 'transparent' : 'rgba(226,226,226,1)'}
      >
        <Flex
          p={'32px 64px'}
          justify={isLanding ? 'flex-end' : 'space-between'}
        >
          {!isLanding && (
            <Image w={'120px'} src='/images/gmb_logo.svg' alt='Logo' />
          )}
          <ConnectWallet
            btnTitle='LOGIN'
            className={'connectButton'}
            switchToActiveChain={true}
            modalSize={'compact'}
          />
        </Flex>
      </AppShell.Header>
      <AppShell.Main pt={isLanding ? 0 : '200px'}>{children}</AppShell.Main>
    </AppShell>
  );
}

export default Header;
