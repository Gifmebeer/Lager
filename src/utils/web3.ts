import { privateKeyToAccount } from 'viem/accounts';
import { Address, createWalletClient, http, publicActions, toHex } from 'viem';
import { optimismSepolia } from 'viem/chains';
import currentNetwork from '@/constants/currentNetwork';

const currentChain = optimismSepolia;

export function privateKeyToWalletClient(privateKey: Address) {
  const network = `https://${currentNetwork.infuraName}.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`;
  const chain = currentChain;
  const account = privateKeyToAccount(`0x${privateKey}`);
  const walletClient = createWalletClient({
    account,
    chain,
    transport: http(network),
  }).extend(publicActions);

  return { walletClient };
}

export function createPublicWalletClient() {
  const network = `https://${currentNetwork.infuraName}.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`;
  const chain = currentChain;

  const walletClient = createWalletClient({
    chain,
    transport: http(network),
  }).extend(publicActions);

  return { walletClient };
}

export function getExplorerLink(txHash: string, chainId: number): string {
  let baseUrl: string = '';

  switch (chainId) {
    case 1: // Ethereum Mainnet
      baseUrl = 'https://etherscan.io/tx/';
      break;
    case 10: // Optimism Mainnet
      baseUrl = 'https://optimistic.etherscan.io/tx/';
      break;
    case 137: // Polygon Mainnet
      baseUrl = 'https://polygonscan.com/tx/';
      break;
    case 80001: // Mumbai Testnet
      baseUrl = 'https://mumbai.polygonscan.com/tx/';
      break;
  }
  return baseUrl + txHash;
}

export function shortenAddress(address: string): string {
  if (!address) return address;
  if (address.length < 10) {
    return address;
  }
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default {
  shortenAddress,
  createPublicWalletClient,
  privateKeyToWalletClient,
};
