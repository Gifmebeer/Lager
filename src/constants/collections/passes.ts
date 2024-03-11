import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../addresses';

export default {
  id: 3,
  name: 'Lifetime Passes',
  address: NFT_COLLECTION_ADDRESS,
  network: 'op-sepolia-testnet',
  chainId: 11155420,
  color: '#2647CD',
  fontColor: 'white',
  cards: [
    {
      name: 'BBF Lifetime Pass',
      address: NFT_COLLECTION_ADDRESS,
      id: 16,
      category: 'Passes',
      imageUrl: '/images/collections/bbf_lifetime_pass_2024.png',
      enabled: false,
      meta: {},
    },
  ],
} as ICollection;
