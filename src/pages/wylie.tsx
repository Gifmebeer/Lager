import React, { useState, useEffect } from 'react';
import { Container, Flex } from '@mantine/core';
import { useActiveAccount } from 'thirdweb/react';
import AppShell from '@/components/Appshell';
import Text from '@/components/Text';

const Raffle: React.FC = () => {
  const account = useActiveAccount();
  const address = account?.address;
  const [uniqueName, setUniqueName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/raffe_wylie.json'); // Assuming your JSON file is located in the public/data folder
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
    <AppShell isRegular>
      <Container my="xl">
        {account ? (
          uniqueName ? (
            <div
              style={{
                left: 0,
                margin: '20px 0 0 0',
              }}
            >
              <Text
                size="xl"
                mb="lg"
                fw={'400'}
                style={{ textAlign: 'center' }}
                content="You won!"
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
              style={{ color: 'black' }}
              size="xl"
              mb="lg"
              fw={'400'}
              content="You are not in the raffle."
            />
          )
        ) : (
          <Flex direction="column">
            <Text
              size="xl"
              mb="lg"
              fw={'400'}
              style={{ color: 'black' }}
              content="Login and check your raffle name."
            />
          </Flex>
        )}
      </Container>
    </AppShell>
  );
};

export default Raffle;
