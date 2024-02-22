import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../addresses';
import wiley from './prelaunch/wiley';

export default {
  id: 0,
  name: 'Beers',
  address: NFT_COLLECTION_ADDRESS,
  network: 'op-sepolia-testnet',
  chainId: 11155420,
  color: '#FFC73B',
  cards: wiley,
} as ICollection;
