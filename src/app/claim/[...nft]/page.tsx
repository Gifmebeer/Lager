import React from 'react';
import { Button, Center, Text } from '@mantine/core';

const Claim = () => {
  return (
    <Center style={{ minHeight: '100vh' }} bg='black'>
      <div>
        <Text c='white' size='xl' style={{ marginBottom: '1rem' }}>
          Click here to claim
        </Text>
        <Button bg='white' c='black' fullWidth>
          1
        </Button>
      </div>
    </Center>
  );
};

export default Claim;
