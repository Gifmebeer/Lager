import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text } from '@mantine/core';
import { useState } from 'react';

const CreditCardForm = ({ onDismiss }: any) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [opened, { open, close }] = useDisclosure(true);
  const elements = useElements();
  const stripe = useStripe();

  const onClick = async () => {
    if (!stripe || !elements) return;
    // Submit payment to Stripe. The NFT is minted later in the webhook.
    await stripe!.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000',
        // 'http://gifme.beer'
      },
      redirect: 'if_required',
    });
    setPaymentSuccessful(true);
  };

  return (
    <Modal
      opened={opened}
      onClose={() => {
        onDismiss();
        close();
      }}
      title="Purchase NFT"
    >
      {paymentSuccessful ? (
        <Text size="sm" mb="xs" fw={500}>
          Payment successful. The NFT will be delivered to your wallet shortly.
        </Text>
      ) : (
        <>
          <PaymentElement />
          <Button
            w="100%"
            mt="lg"
            bg={'#FF0'}
            c={'black'}
            style={{ borderRadius: 12 }}
            onClick={onClick}
          >
            Pay now
          </Button>
        </>
      )}
    </Modal>
  );
};

export default CreditCardForm;
