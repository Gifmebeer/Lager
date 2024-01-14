import React from 'react';
import { Button, Center, Text } from '@mantine/core';

const Claim = ({ params: { nft } }: { params: { nft: string } }) => {
  console.log({ nft });
  return (
    <Center style={{ minHeight: '100vh' }} bg='black'>
      <div>
        <Text c='white' size='xl' style={{ marginBottom: '1rem' }}>
          Click here to claim
        </Text>
        <Text c='white' size='xl'>
          {nft![0]}
        </Text>
        <Button bg='white' c='black' fullWidth>
          1
        </Button>
      </div>
    </Center>
  );
};

export default Claim;
