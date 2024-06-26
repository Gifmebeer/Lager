import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import {
  ThirdwebProvider,
  lightTheme,
  // smartWallet,
} from '@thirdweb-dev/react';
import { Optimism } from '@thirdweb-dev/chains';
import { ThirdwebProvider as ThirdwebProviderV5 } from 'thirdweb/react';
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
  const isBBFLifetimePass = router.pathname.includes('lifetimepass');

  return (
    <ThirdwebProvider
      // TODO: CHANGE THIS WHEN MOVING TO MAINNET
      activeChain={isBBFLifetimePass ? Optimism : currentNetwork.thirdwebChain}
      // activeChain={currentNetwork.thirdwebChain}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      <ThirdwebProviderV5>{children}</ThirdwebProviderV5>
    </ThirdwebProvider>
  );
};

export default ThirdWebProvider;
