import { ICollection } from '@/types';
import { NFT_COLLECTION_ADDRESS } from '../addresses';

export default {
  id: 1,
  name: 'prelaunch',
  address: NFT_COLLECTION_ADDRESS,
  network: 'op-sepolia-testnet',
  chainId: 11155420,
  color: 'rgba(99, 192, 172, 1)',
  cards: [
    {
      name: 'Boo',
      address: NFT_COLLECTION_ADDRESS,
      id: 0,
      category: 'Brewery',
      imageUrl: '/images/collections/op-sepolia-test/boo.gif',
      meta: {},
    },
    {
      name: 'The Beer Place',
      address: NFT_COLLECTION_ADDRESS,
      id: 1,
      category: 'Brewery',
      imageUrl: '/images/collections/op-sepolia-test/the-beer-place.gif',
      meta: {},
    },
    {
      name: 'Wow',
      address: NFT_COLLECTION_ADDRESS,
      id: 2,
      category: 'Brewery',
      imageUrl: '/images/collections/op-sepolia-test/wow.gif',
      meta: {},
    },
    {
      name: 'Free Beer',
      address: NFT_COLLECTION_ADDRESS,
      id: 3,
      category: 'Brewery',
      imageUrl: '/images/collections/op-sepolia-test/free-beer.gif',
      meta: {},
    },
  ],
} as ICollection;
