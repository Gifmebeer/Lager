import React from 'react';
import { Center, Text } from '@mantine/core';

const Claim = () => {
  return (
    <Center style={{ minHeight: '100vh' }} bg='black'>
      <div>
        <Text c='white' size='xl' style={{ marginBottom: '1rem' }}>
          Nothing to claim
        </Text>
      </div>
    </Center>
  );
};

export default Claim;
