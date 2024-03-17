import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../../addresses';
import wiley from './wiley';
import synera from './synera';

export default {
  id: 1,
  name: 'Beers',
  address: NFT_COLLECTION_ADDRESS,
  network: 'op-sepolia-testnet',
  chainId: 11155420,
  color: '#FFC73B',
  cards: [...synera, ...wiley],
} as ICollection;
