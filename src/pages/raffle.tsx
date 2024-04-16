import React, { useState, useEffect } from 'react';
import { Container } from '@mantine/core';
import { useActiveAccount } from 'thirdweb/react';
import AppShell from '@/components/Appshell';
import Text from '@/components/Text';
import ConnectWalletBtn from '@/components/ConnectWallet';

const Raffle: React.FC = () => {
  const account = useActiveAccount();
  const address = account?.address;
  console.log({ account });
  const [uniqueName, setUniqueName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/prelaunch_owners_raffle.json'); // Assuming your JSON file is located in the public/data folder
        const data = await response.json();
        const foundAddress = data.find(
          (item: any) => item.address?.toLowerCase() === address?.toLowerCase(),
        );

        if (foundAddress) {
          setUniqueName(foundAddress.uniqueName);
        } else {
          setUniqueName('');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [address]);

  return (
    <AppShell isRegular noFooter>
      <Container mt="xl">
        {account ? (
          uniqueName ? (
            <div
              style={{
                width: '100vw',
                height: '100%',
                position: 'absolute',
                left: 0,
                margin: '20px 0 0 0',
              }}
            >
              <Text
                size="xl"
                mb="lg"
                fw={'400'}
                style={{ textAlign: 'center' }}
                content="You are in the raffle!"
              />

              <div className="flickeringBanner">
                <Text
                  style={{
                    textShadow:
                      '0.7px 0 black, 0 0.7px black, -0.7px 0 black, 0 -0.7px black',
                    color: 'white',
                    textAlign: 'center',
                  }}
                  size="32px"
                  content={`${uniqueName}`}
                />
              </div>
            </div>
          ) : (
            <Text
              size="xl"
              mb="lg"
              fw={'400'}
              content="You are not in the raffle."
            />
          )
        ) : (
          <div>
            <Text
              size="xl"
              mb="lg"
              fw={'400'}
              content="Connect your wallet and check your raffle name."
            />
            <ConnectWalletBtn />
          </div>
        )}
      </Container>
    </AppShell>
  );
};

export default Raffle;
