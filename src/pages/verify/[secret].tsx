import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Container, Input } from '@mantine/core';
import AppShell from '@/components/Appshell';
import Text from '@/components/Text';

const NOT_SO_SECRET_SECRET = 'IpaPixelsAndGoldenAleTokens';

const VerifyGiftPage: React.FC = () => {
  const router = useRouter();
  const secret = router.query.secret;
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Manage this eventually if needed
  const isAllowed = secret === NOT_SO_SECRET_SECRET;

  const handleVerify = async () => {
    try {
      setMessage('');
      setIsVerified(false);
      setIsLoading(true);
      const response = await fetch('/api/redeemCode', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data?.error) {
        setMessage(data?.error);
      } else if (data?.message) {
        setMessage(data?.message);
        setIsVerified(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error verifying code:', error);
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <AppShell isRegular>
      <Container mih="50vh" m="auto" mt="xl">
        {isAllowed ? (
          <>
            <Text
              size="xl"
              mb="lg"
              fw={'400'}
              content="Enter a code to verify:"
            />
            <Input
              size="xl"
              value={code}
              onChange={(event) => setCode(event.currentTarget.value)}
              onKeyDown={handleKeyPress}
            />
            <Button
              my="md"
              size="xl"
              bg={'#FF0'}
              c={'black'}
              style={{ borderRadius: 12 }}
              onClick={handleVerify}
            >
              <Text content="Verify" />
            </Button>
            {isLoading ? (
              <Text fw="bold" c="black" content="Brewing..." />
            ) : isVerified ? (
              <Text fw="bold" c="green" content="Code is now verified!" />
            ) : (
              message && <Text fw="bold" c="red" content={message} />
            )}
          </>
        ) : (
          <Text
            size="xl"
            mb="lg"
            content="You are not allowed to verify codes."
          />
        )}
      </Container>
    </AppShell>
  );
};

export default VerifyGiftPage;
