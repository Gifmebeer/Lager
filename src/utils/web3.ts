import { privateKeyToAddress, privateKeyToAccount } from 'viem/accounts';
import { Address, createWalletClient, http, publicActions, toHex } from 'viem';
import { polygon, polygonMumbai } from 'viem/chains';

export function privateKeyToWalletClient(privateKey: Address, chainId: number) {
  const network = `https://${
    chainId === 80001 ? 'polygon-mumbai' : 'polygon-mainnet'
  }.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`;
  const chain = chainId === 80001 ? polygonMumbai : polygon;
  const account = privateKeyToAccount(`0x${privateKey}`);
  const walletClient = createWalletClient({
    account,
    chain,
    transport: http(network),
  }).extend(publicActions);

  return { walletClient };
}

export default {
  privateKeyToWalletClient,
};
