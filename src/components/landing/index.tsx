'use client';

import {
  ConnectWallet,
  useContract,
  useAddress,
  useOwnedNFTs,
  useNFTBalance,
} from '@thirdweb-dev/react';
import { Flex } from '@mantine/core';
import { NFT_MEMBERSHIP_ADDRESS } from '@/constants/addresses';
import { NFTCard } from '@/components/NFTCard';

const LandingPage = () => {
  const TOKEN_ID = 0;
  const { data: contract } = useContract(NFT_MEMBERSHIP_ADDRESS);
  const address = useAddress();
  const { data: nfts, isLoading } = useOwnedNFTs(contract, address);
  const { data: nftBalance } = useNFTBalance(contract, address, TOKEN_ID);

  return (
    <div>
      <Flex
        m={100}
        mih={100}
        gap='md'
        justify='center'
        align='center'
        direction='column'
      >
        <ConnectWallet switchToActiveChain={true} modalSize={'compact'} />
        {!address ? null : isLoading ? (
          <div>
            <h3>Loading...</h3>
          </div>
        ) : (
          <Flex justify='center' align='center' direction='column'>
            {<h1>GifMeBeer Membership</h1>}
            <h2>
              TOTAL ITEMS: <span>{nftBalance?.toNumber()}</span>
            </h2>

            {!address && <h1>Connect your wallet</h1>}
            {address && isLoading && <h1>Loading...</h1>}
            {address && !isLoading && !nfts?.length && (
              <div>
                <h3>You have no membership :(</h3>
              </div>
            )}
            <div>
              {nfts?.map((nft) => (
                <NFTCard metadata={nft.metadata} key={nft.metadata.id} />
              ))}
            </div>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default LandingPage;
