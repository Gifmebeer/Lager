import {
  // optimismSepolia,
  optimism,
} from 'thirdweb/chains';
import { Optimism } from '@thirdweb-dev/chains';

export default {
  name: 'Optimism Mainnet',
  infuraName: 'optimism-mainnet',
  thirdwebName: 'optimism',
  thirdwebChain: Optimism,
  thirdwebChainv5: optimism,
  chainId: 10,
};

// export default {
//   name: 'Optimism Sepolia Testnet',
//   infuraName: 'optimism-sepolia',
//   thirdwebName: 'op-sepolia-testnet',
//   thirdwebChain: optimismSepolia,
//   chainId: 11155420,
// };
