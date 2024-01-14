import { NFT_MEMBERSHIP_ADDRESS } from '../addresses';

export default {
  name: 'membership',
  address: NFT_MEMBERSHIP_ADDRESS,
  network: 'mumbai',
  chainId: 80001,
  cards: [
    {
      name: 'Pre-launch Test',
      address: NFT_MEMBERSHIP_ADDRESS,
      id: '1',
      category: 'membership',
      imageUrl: '/images/collections/membership_prelaunch_card.png',
      meta: {},
    },
  ],
};
