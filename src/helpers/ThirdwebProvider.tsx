'use client';

import { ReactNode } from 'react';

interface ThirdWebProviderProps {
  children: ReactNode;
}

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  embeddedWallet,
  bloctoWallet,
  smartWallet,
} from '@thirdweb-dev/react';
import { Polygon, Mumbai } from '@thirdweb-dev/chains';
import { FACTORY_ADDRESS } from '@/constants/addresses';

const ThirdWebProvider: React.FC<ThirdWebProviderProps> = ({ children }) => {
  const smartWalletConfig = {
    factoryAddress: FACTORY_ADDRESS,
    gasless: true,
  };

  return (
    <ThirdwebProvider
      activeChain='mumbai'
      supportedChains={[Mumbai, Polygon]}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      supportedWallets={[
        smartWallet(embeddedWallet(), smartWalletConfig),
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        bloctoWallet(),
      ]}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default ThirdWebProvider;
