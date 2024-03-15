import { ConnectWallet, lightTheme } from '@thirdweb-dev/react';

const ConnectWalletBtn = ({ btntitle, className }: any) => {
  return (
    <ConnectWallet
      btnTitle={btntitle}
      className={className}
      switchToActiveChain={true}
      theme={lightTheme({
        colors: { accentButtonBg: '#c8c9cb' },
      })}
      welcomeScreen={{
        img: {
          src: '/images/gifmebeer-logo-150x.png',
          width: 150,
          height: 150,
        },
        title: 'Collect your craft beer experiences',
        subtitle: 'Login to get started',
      }}
    />
  );
};

export default ConnectWalletBtn;
