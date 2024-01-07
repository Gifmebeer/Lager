'use client';

import { AppShell, Container, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ConnectWallet } from '@thirdweb-dev/react';
import { ReactNode } from 'react';

interface IHeader {
  children: ReactNode;
}

function Header({ children }: IHeader) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 60, offset: false }}>
      <AppShell.Header withBorder={false} bg={'transparent'}>
        <Flex p={16} justify={'flex-end'}>
          <ConnectWallet
            btnTitle='LOGIN'
            className={'connectButton'}
            switchToActiveChain={true}
            modalSize={'compact'}
          />
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Container fluid bg={'gray'} p={0}>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default Header;
