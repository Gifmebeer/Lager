import { ICollection } from '@/types';
const NFT_COLLECTION_ADDRESS = '0x2949004d5F956743cA38555B532891D0dc7fC27D';
export default {
  id: 3,
  name: 'Lifetime Passes',
  address: NFT_COLLECTION_ADDRESS,
  network: 'optimism',
  chainId: 10,
  color: '#2647CD',
  fontColor: 'white',
  cards: [
    {
      name: 'BBF Lifetime Pass',
      address: NFT_COLLECTION_ADDRESS,
      id: 0,
      category: 'Passes',
      imageUrl: '/images/collections/bbf_lifetime_pass_2024.png',
      enabled: false,
      meta: {},
    },
  ],
} as ICollection;
