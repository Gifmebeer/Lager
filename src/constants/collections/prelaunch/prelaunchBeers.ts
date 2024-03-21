import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../../addresses';
import wiley from './wiley';
import synera from './synera';
import laquince from './laquince';
import naparbier from './naparbier';
import lapirata from './lapirata';
import mager from './mager';

export default {
  id: 1111111111111, // deprecated
  name: 'Beers',
  address: NFT_COLLECTION_ADDRESS,
  network: 'op-sepolia-testnet',
  chainId: 11155420,
  color: '#FFC73B',
  cards: [
    ...synera,
    ...wiley,
    ...laquince,
    ...naparbier,
    ...lapirata,
    ...mager,
  ],
} as ICollection;
