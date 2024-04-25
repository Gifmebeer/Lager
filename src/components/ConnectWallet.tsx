import { createThirdwebClient } from 'thirdweb';
import { createWallet, inAppWallet } from 'thirdweb/wallets';
import { ConnectButton } from 'thirdweb/react';
import { currentThirdwebChain } from '@/utils/web3';

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

const wallets = [
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  inAppWallet(),
];

const ConnectWalletBtn = ({ btntitle, className }: any) => {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      autoConnect
      chain={currentThirdwebChain}
      connectButton={{ label: btntitle, className: className }}
      connectModal={{
        welcomeScreen: {
          img: {
            src: '/images/gifmebeer-logo-150x.png',
            width: 150,
            height: 150,
          },
          title: 'Collect your craft beer experiences',
          subtitle: 'Login to get started',
        },
      }}
      theme={'light'}
    />
  );
};

export default ConnectWalletBtn;
