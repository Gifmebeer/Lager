import { useState } from 'react';
import { Button, Flex, Loader, NumberInput, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  useConnectionStatus,
  useContract,
  useContractRead,
  useContractWrite,
  useNFT,
  useOwnedNFTs,
  useSetIsWalletModalOpen,
  useTokenBalance,
} from '@thirdweb-dev/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { NFTCard } from '@/components/NFTCard';
import {
  PASS_CONTRACT,
  PASS_TOKEN_ID,
  CURRENCY,
  CURRENCY_SYMBOL,
  PRICE_PER_NFT,
  PRICE_PER_NFT_FORMATTED,
  MAX_MINT_AMOUNT,
  MAX_MINT_PER_WALLET,
  INFURA_NAME,
} from '@/constants/lifetimepass/BBF2024';
import Text from '../Text';
import { createPublicWalletClient } from '@/utils/web3';
import CreditCardForm from './creditcard.form';
import { useActiveAccount } from 'thirdweb/react';

const BBFLP_Contract = PASS_CONTRACT;
const BBFLP_TOKEN_ID = PASS_TOKEN_ID;

const _allowlistProof = {
  proof: [],
  quantityLimitPerWallet: '0x2',
  pricePerToken: PRICE_PER_NFT,
  currency: CURRENCY,
};

const BBF = () => {
  const account = useActiveAccount();
  const address = account?.address;
  const buyerWalletAddress = address;
  const [clientSecret, setClientSecret] = useState('');
  const [quantity, setQuantity] = useState<string | number>(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { walletClient } = createPublicWalletClient(INFURA_NAME);
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === 'connected';
  const isDisconnected = connectionStatus === 'disconnected';
  const setIsWalletModalOpen = useSetIsWalletModalOpen();
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);

  const { contract } = useContract(BBFLP_Contract, 'edition-drop');
  const { contract: currencyContract } = useContract(CURRENCY);
  const { data: currencyBalance } = useTokenBalance(currencyContract, address);
  const { data: allowance, refetch: refetchAllowance } = useContractRead(
    currencyContract,
    'allowance',
    [address, BBFLP_Contract],
  );

  const { data: currentNFT, isLoading: currentNFTIsLoading } = useNFT(
    contract,
    BBFLP_TOKEN_ID,
  );
  const { data: ownedNFT, isLoading: ownLoading } = useOwnedNFTs(
    contract,
    address,
  );
  const currentCurrencyBalance = currencyBalance?.value || 0;
  const ownsNFT = ownedNFT?.find(
    (i) => Number(i.metadata.id) === Number(BBFLP_TOKEN_ID),
  );
  const qtyOwned = ownsNFT && ownsNFT?.quantityOwned;
  const currentSupply = currentNFT?.supply || 0;
  const { mutateAsync: claim, isLoading } = useContractWrite(contract, 'claim');
  const { mutateAsync: approve } = useContractWrite(
    currencyContract,
    'approve',
  );

  const reachedSupply = Number(currentSupply) >= MAX_MINT_AMOUNT;
  const _isLoading =
    !isDisconnected &&
    (loading || isLoading || currentNFTIsLoading || ownLoading);

  // Retrieve a Stripe client secret to display the credit card form.
  const onClickPurchase = async () => {
    const resp = await fetch('/api/stripe/intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        buyerWalletAddress,
        amount: PRICE_PER_NFT_FORMATTED * Number(quantity),
      }),
    });
    const json = await resp.json();
    setClientSecret(json.clientSecret);
  };
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

  const call = async () => {
    try {
      setError('');
      setLoading(true);
      if (!isConnected) {
        setLoading(false);
        setIsWalletModalOpen(true);
      }
      if (!quantity) {
        setLoading(false);
        return setError('Please enter a quantity');
      }
      if (qtyOwned && Number(qtyOwned) >= MAX_MINT_PER_WALLET) {
        setLoading(false);
        return setError(
          `You can only mint ${MAX_MINT_PER_WALLET} NFTs per wallet`,
        );
      }
      const _value = BigInt(PRICE_PER_NFT) * BigInt(quantity);

      if (_value > BigInt(Number(currentCurrencyBalance))) {
        setLoading(false);
        return setError('Insufficient balance');
      }
      // check if the user has enough allowance
      if (BigInt(allowance) < BigInt(_value)) {
        const _approve = await approve({
          args: [
            BBFLP_Contract, //_spender,
            _value,
          ],
        });
        const approveReceipt = await walletClient.waitForTransactionReceipt({
          hash: `${_approve?.receipt?.transactionHash}` as `0x${string}`,
        });
        console.log({ approveReceipt });
      }
      const data = await claim({
        args: [
          address, //_receiver,
          BBFLP_TOKEN_ID, //_tokenId,
          quantity, //_quantity,
          CURRENCY, //_currency,
          PRICE_PER_NFT, //_pricePerToken,
          _allowlistProof,
          '0x', // data
        ],
      });
      console.info('contract call successs', data);
      const mintReceipt = await walletClient.waitForTransactionReceipt({
        hash: `${data?.receipt?.transactionHash}` as `0x${string}`,
      });
      setLoading(false);
      refetchAllowance();
      console.log({ mintReceipt });
    } catch (err: any) {
      setLoading(false);
      setError(`Error: ${err?.reason || 'contract call failure'}`);
      console.error('contract call failure', err);
    }
  };
  const shouldMint =
    isConnected &&
    Number(qtyOwned || 0) < MAX_MINT_PER_WALLET &&
    !reachedSupply;
  const shouldUseStripe = !_isLoading && shouldMint;

  return (
    <Flex
      w="100%"
      maw="1280px"
      align={'center'}
      justify={{ base: 'center', md: 'space-evenly' }}
      p={{ base: '180px 0 80px 0', md: '220px 0' }}
      mih={'100vh'}
      gap="xl"
      m="auto"
      direction={{ base: 'column', md: 'row' }}
      bg="linear-gradient(180deg, #2647CD 0%, #0D2175 100%)"
    >
      <Flex
        align={'center'}
        gap={{ base: 'xl', md: '52px' }}
        direction={{ base: 'column' }}
      >
        <Flex
          miw="277px"
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
        >
          <Text
            content="VIP Lifetime Pass"
            size={isMobile ? 'xl' : '38px'}
            c={'white'}
          />
          <Text
            content="Barcelona Beer Festival"
            size={isMobile ? 'sm' : '22px'}
            mt={isMobile ? '0' : 'xs'}
            c={'white'}
          />
        </Flex>
        {currentNFT ? (
          <NFTCard
            w={isMobile ? 236 : 318}
            withShadow
            address={BBFLP_Contract}
            metadata={currentNFT.metadata}
            key={BBFLP_TOKEN_ID}
          />
        ) : (
          currentNFTIsLoading && <Loader color="white" />
        )}
      </Flex>

      <Flex
        align={'center'}
        gap="xl"
        direction={{ base: 'column', md: 'column-reverse' }}
      >
        {qtyOwned && (
          <Text
            content={
              Number(qtyOwned) > 1
                ? `You own ${ownsNFT.quantityOwned} Lifetime passes!`
                : 'You own one Lifetime pass!'
            }
            c="#FF0"
            fw="bold"
          />
        )}
        <Flex
          bg="#234FFF"
          direction={'column'}
          align={'flex-start'}
          justify={'center'}
          gap="md"
          w={{ base: '283px', md: '399px' }}
          p="lg"
          style={{ borderRadius: 12 }}
        >
          <Text
            content="AMOUNT OF NFTs TO MINT"
            size="sm"
            c={'white'}
            ff={'GT-America'}
            fw="bold"
          />
          <NumberInput
            w={'100%'}
            hideControls
            clampBehavior="strict"
            min={0}
            max={MAX_MINT_PER_WALLET}
            allowDecimal={false}
            variant="filled"
            radius="md"
            placeholder="Amount"
            error={error}
            value={quantity}
            onChange={(n: string | number) => {
              setError('');
              setQuantity(n);
            }}
            classNames={{ error: 'input_error' }}
          />
          <Text
            c={'white'}
            ff={'GT-America'}
            mt={-8}
            mb="xs"
            size="12px"
            content={`${currentSupply}/${MAX_MINT_AMOUNT}`}
          />
          <Flex w="100%" justify={'space-between'}>
            <Text
              size={'12px'}
              content="MAX MINT PER USER"
              c={'lightgray'}
              ff={'GT-America'}
            />
            <Text
              size={'16px'}
              content={`${MAX_MINT_PER_WALLET}`}
              c={'white'}
              ff={'GT-America'}
              fw="bold"
            />
          </Flex>
          <Flex w="100%" justify={'space-between'}>
            <Text
              size={'12px'}
              content="MINT PRICE PER NFT"
              c={'lightgray'}
              ff={'GT-America'}
            />
            <Text
              size={'16px'}
              content={`${PRICE_PER_NFT_FORMATTED} ${CURRENCY_SYMBOL}`}
              c={'white'}
              ff={'GT-America'}
              fw="bold"
            />
          </Flex>
          <Flex
            gap={'md'}
            my="xs"
            w="100%"
            justify={'center'}
            direction="column"
          >
            <Button
              w="100%"
              disabled={!shouldMint}
              loading={_isLoading}
              bg={_isLoading ? 'transparent' : '#FF0'}
              c={'black'}
              style={{ borderRadius: 12 }}
              onClick={call}
            >
              <Text
                content={
                  !isConnected
                    ? 'Connect Wallet'
                    : shouldMint
                    ? 'Mint'
                    : Number(qtyOwned) >= MAX_MINT_PER_WALLET
                    ? 'Max minted'
                    : reachedSupply
                    ? 'Reached supply'
                    : ''
                }
              />
            </Button>
            {shouldUseStripe && (
              <>
                <Button
                  w="100%"
                  // disabled={!shouldMint}
                  bg={'black'}
                  c={'white'}
                  style={{ borderRadius: 12 }}
                  onClick={onClickPurchase}
                >
                  <Text content={'credit card'} />
                </Button>
                {!!clientSecret && (
                  <Elements stripe={stripe} options={{ clientSecret }}>
                    <CreditCardForm onDismiss={() => setClientSecret('')} />
                  </Elements>
                )}
              </>
            )}
          </Flex>
        </Flex>
        <Flex w={{ base: '260px', md: '405px' }}>
          <Text
            c={'white'}
            ff={'GT-America'}
            size="16px"
            lh="20px"
            content={`The Lifetime Pass collection is available on Optimism Mainnet and 150 of a total of 160 NFTs will be offered for public minting. The first 50 passes can be minted for 500 ${CURRENCY_SYMBOL} on early bird until March 21st 11:59pm CET when the Barcelona Beer Festival will launch. After that date price will increase to 650 ${CURRENCY_SYMBOL}. Max, two mints per address.`}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BBF;
