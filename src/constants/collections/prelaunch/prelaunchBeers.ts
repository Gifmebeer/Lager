import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../../addresses';
import wiley from './wiley';
import synera from './synera';
import laquince from './laquince';
import naparbier from './naparbier';
import lapirata from './lapirata';
import mager from './mager';
import maresme from './maresme';
import engorile from './engorile';
import gat from './gat';

export default {
  id: 1111111111111, // deprecated
  name: 'Beers',
  address: NFT_COLLECTION_ADDRESS,
  network: 'optimism',
  chainId: 10,
  color: '#FFC73B',
  cards: [
    ...synera,
    ...wiley,
    ...laquince,
    ...naparbier,
    ...lapirata,
    ...mager,
    ...maresme,
    ...engorile,
    ...gat,
  ],
} as ICollection;
