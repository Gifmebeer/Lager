import { useState } from 'react';
import { Button, Flex, NumberInput } from '@mantine/core';
import {
  useAddress,
  useConnectionStatus,
  useContract,
  useContractRead,
  useContractWrite,
  useNFT,
  useSetIsWalletModalOpen,
} from '@thirdweb-dev/react';
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
} from '@/constants/lifetimepass/bbf2024Test';
import Text from '../Text';

const BBFLP_Contract = PASS_CONTRACT;
const BBFLP_TOKEN_ID = PASS_TOKEN_ID;

const _allowlistProof = {
  proof: [],
  quantityLimitPerWallet: '0x2',
  pricePerToken: PRICE_PER_NFT,
  currency: CURRENCY,
};

const BBF = () => {
  const address = useAddress();
  const [quantity, setQuantity] = useState(1);
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === 'connected';
  const setIsWalletModalOpen = useSetIsWalletModalOpen();
  const { contract } = useContract(BBFLP_Contract, 'edition-drop');
  const { contract: currencyContract } = useContract(CURRENCY);
  const { data: allowance } = useContractRead(currencyContract, 'allowance', [
    address,
    BBFLP_Contract,
  ]);
  const { data: currentNFT, isLoading: currentNFTIsLoading } = useNFT(
    contract,
    BBFLP_TOKEN_ID,
  );
  const currentSupply = currentNFT?.supply || 0;
  const { mutateAsync: claim, isLoading } = useContractWrite(contract, 'claim');
  const { mutateAsync: approve } = useContractWrite(
    currencyContract,
    'approve',
  );

  const call = async () => {
    try {
      if (!isConnected) setIsWalletModalOpen(true);
      // check if the user has enough allowance
      if (BigInt(allowance) < BigInt(quantity)) {
        const _approve = await approve({
          args: [
            BBFLP_Contract, //_spender,
            BigInt(PRICE_PER_NFT) * BigInt(quantity), //_value,
          ],
        });
        console.log({ _approve });
        return;
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
    } catch (err) {
      console.error('contract call failure', err);
    }
  };

  const shouldClaim = !!isConnected;

  return (
    <Flex
      w="100%"
      align={'center'}
      justify={'center'}
      p={{ base: '180px 0 80px 0', md: '220px 0' }}
      mih={'100vh'}
      gap="xl"
      m="auto"
      direction={{ base: 'column', md: 'row' }}
      bg="linear-gradient(180deg, #2647CD 0%, #0D2175 100%)"
    >
      <Flex align={'center'} gap="xl" direction={{ base: 'column' }}>
        <Flex
          miw="277px"
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
        >
          <Text content="VIP Lifetime Pass" size="xl" c={'white'} />
          <Text content="Barcelona Beer Festival" size="sm" c={'white'} />
        </Flex>
        {currentNFT && (
          <NFTCard
            w={236}
            address={BBFLP_Contract}
            metadata={currentNFT.metadata}
            key={BBFLP_TOKEN_ID}
          />
        )}
      </Flex>

      <Flex
        align={'center'}
        gap="xl"
        direction={{ base: 'column', md: 'column-reverse' }}
      >
        <Flex
          bg="#234FFF"
          direction={'column'}
          align={'flex-start'}
          justify={'center'}
          gap="md"
          w={'283px'}
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
              content="MAX MINT AMOUNT"
              c={'lightgray'}
              ff={'GT-America'}
            />
            <Text
              size={'16px'}
              content={`${MAX_MINT_AMOUNT}`}
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
          <Flex my="xs" w="100%" justify={'center'}>
            <Button
              w="100%"
              bg="#FF0"
              c={'black'}
              style={{ borderRadius: 12 }}
              onClick={call}
            >
              <Text content={shouldClaim ? 'Claim' : 'Connect Wallet'} />
            </Button>
          </Flex>
        </Flex>
        <Flex w="260px">
          <Text
            c={'white'}
            ff={'GT-America'}
            size="16px"
            lh="20px"
            content="The Lifetime Pass collection is available on Optimism Mainnet and 150 of a total of 160 NFTs will be offered for public minting. The first 50 passes can be minted for DAI 500 on early bird until March 21st 11:59pm CET when the Barcelona Beer Festival will launch. After that date price will increase to DAI 650."
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BBF;
