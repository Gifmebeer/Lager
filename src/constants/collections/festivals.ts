import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../addresses';

export default {
  id: 2,
  name: 'Festivals',
  address: NFT_COLLECTION_ADDRESS,
  network: 'optimism',
  chainId: 10,
  color: 'rgba(99, 192, 172, 1)',
  cards: [
    {
      name: 'BBF 2024',
      address: NFT_COLLECTION_ADDRESS,
      id: 0,
      category: 'Festival',
      imageUrl: '/images/collections/op-mainnet/bbf_2024.gif',
      meta: {},
    },
    {
      name: 'GifMeBeer Membership',
      address: NFT_COLLECTION_ADDRESS,
      id: 7,
      category: 'Festival',
      imageUrl: '/images/collections/membership_prelaunch_card.gif',
      meta: {},
    },
  ],
} as ICollection;
