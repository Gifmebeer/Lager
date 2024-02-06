import { ReactNode } from 'react';

interface ThirdWebProviderProps {
  children: ReactNode;
}

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  embeddedWallet,
  // smartWallet,
} from '@thirdweb-dev/react';
import { OpSepoliaTestnet } from '@thirdweb-dev/chains';
// import { FACTORY_ADDRESS } from '@/constants/addresses';

const ThirdWebProvider: React.FC<ThirdWebProviderProps> = ({ children }) => {
  // const smartWalletConfig = {
  //   chain: OpSepoliaTestnet,
  //   factoryAddress: FACTORY_ADDRESS,
  //   gasless: true,
  // };

  return (
    <ThirdwebProvider
      activeChain={OpSepoliaTestnet}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      supportedWallets={[
        embeddedWallet(),
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
      ]}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default ThirdWebProvider;
