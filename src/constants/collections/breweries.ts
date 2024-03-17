import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../addresses';

export default {
  id: 0,
  name: 'Breweries',
  address: NFT_COLLECTION_ADDRESS,
  network: 'optimism',
  chainId: 10,
  color: 'rgba(108, 50, 240, 1)',
  fontColor: 'white',
  cards: [
    {
      name: 'Basqueland',
      address: NFT_COLLECTION_ADDRESS,
      id: 1,
      category: 'Brewery',
      imageUrl: '/images/collections/op-mainnet/basqueland.gif',
      meta: {},
    },
    {
      name: 'La Quince',
      address: NFT_COLLECTION_ADDRESS,
      id: 2,
      category: 'Brewery',
      imageUrl: '/images/collections/op-mainnet/laquince.gif',
      meta: {},
    },
    {
      name: 'Mager',
      address: NFT_COLLECTION_ADDRESS,
      id: 3,
      category: 'Brewery',
      imageUrl: '/images/collections/op-mainnet/mager.gif',
      meta: {},
    },
    {
      name: 'Maresme',
      address: NFT_COLLECTION_ADDRESS,
      id: 4,
      category: 'Brewery',
      imageUrl: '/images/collections/op-mainnet/maresme.gif',
      meta: {},
    },
    {
      name: 'Naparbier',
      address: NFT_COLLECTION_ADDRESS,
      id: 5,
      category: 'Brewery',
      imageUrl: '/images/collections/op-mainnet/naparbier.gif',
      meta: {},
    },
    {
      name: 'La Pirata',
      address: NFT_COLLECTION_ADDRESS,
      id: 6,
      category: 'Brewery',
      imageUrl: '/images/collections/op-mainnet/lapirata.gif',
      meta: {},
    },
  ],
} as ICollection;
