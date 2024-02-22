import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../addresses';
import breweries from './prelaunch/breweries';

export default {
  id: 1,
  name: 'Breweries',
  address: NFT_COLLECTION_ADDRESS,
  network: 'op-sepolia-testnet',
  chainId: 11155420,
  color: 'rgba(99, 192, 172, 1)',
  cards: breweries,
} as ICollection;
