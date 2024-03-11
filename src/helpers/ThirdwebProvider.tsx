import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  embeddedWallet,
  // smartWallet,
} from '@thirdweb-dev/react';
// import {
//    Optimism,
//   OpSepoliaTestnet,
// } from '@thirdweb-dev/chains';
import { currentChain } from '@/utils/web3';
import currentNetwork from '@/constants/currentNetwork';
// import { FACTORY_ADDRESS } from '@/constants/addresses';

interface ThirdWebProviderProps {
  children: ReactNode;
}

const ThirdWebProvider: React.FC<ThirdWebProviderProps> = ({ children }) => {
  // const smartWalletConfig = {
  //   chain: OpSepoliaTestnet,
  //   factoryAddress: FACTORY_ADDRESS,
  //   gasless: true,
  // };
  const router = useRouter();
  // const isBBFLifetimePass = router.pathname.includes('lifetimepass');
  return (
    <ThirdwebProvider
      // TODO: CHANGE THIS WHEN MOVING TO MAINNET
      // activeChain={isBBFLifetimePass ? Optimism : OpSepoliaTestnet}
      activeChain={currentNetwork.thirdwebChain}
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
