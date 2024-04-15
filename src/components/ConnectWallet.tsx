import { createThirdwebClient } from 'thirdweb';
import { createWallet, inAppWallet } from 'thirdweb/wallets';
import { ConnectButton, lightTheme } from 'thirdweb/react';
import { currentThirdwebChain } from '@/utils/web3';

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

const wallets = [
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  inAppWallet({
    auth: {
      options: ['email', 'google', 'apple', 'facebook'],
    },
  }),
];

const ConnectWalletBtn = ({ btntitle, className }: any) => {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
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
      theme={lightTheme({
        colors: { accentButtonBg: '#c8c9cb' },
      })}
    />
  );
};

export default ConnectWalletBtn;
