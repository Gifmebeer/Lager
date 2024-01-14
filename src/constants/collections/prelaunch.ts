import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../addresses';

export default {
  id: 1,
  name: 'prelaunch',
  address: NFT_COLLECTION_ADDRESS,
  network: 'mumbai',
  chainId: 80001,
  color: 'rgba(99, 192, 172, 1)',
  cards: [
    {
      name: 'Test #1',
      address: NFT_COLLECTION_ADDRESS,
      id: 0,
      category: 'Brewery',
      imageUrl: '/images/collections/brewery_card.png',
      meta: {},
    },
  ],
} as ICollection;
