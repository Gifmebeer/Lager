import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../addresses';

export default {
  id: 1,
  name: 'prelaunch',
  address: NFT_COLLECTION_ADDRESS,
  network: 'optimism',
  chainId: 10,
  color: 'rgba(99, 192, 172, 1)',
  cards: [
    {
      name: 'GIF Test',
      address: NFT_COLLECTION_ADDRESS,
      id: 0,
      category: 'Brewery',
      imageUrl: '/images/collections/blue_brewery.gif',
      meta: {},
    },
  ],
} as ICollection;
