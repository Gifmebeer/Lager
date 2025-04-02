import { NextApiRequest, NextApiResponse } from 'next';
import { createThirdwebClient, getContract } from 'thirdweb';
import { optimism } from 'thirdweb/chains';
import { getOwnedNFTs } from 'thirdweb/extensions/erc1155';
import { Address, getAddress } from 'viem';

// Define default pagination values
const DEFAULT_START = 0;
const DEFAULT_COUNT = 100;
const MAX_COUNT = 500;

// Define a type that includes the supply property
type NFTWithSupply = Awaited<ReturnType<typeof getOwnedNFTs>>[number] & {
  supply: bigint;
};

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const {
      address,
      nftAddress,
      tokenId,
      start = DEFAULT_START,
      count = DEFAULT_COUNT,
    } = query;

    // Validate required parameters
    if (!address || !nftAddress) {
      return res.status(400).json({
        error:
          'Required parameters missing: address and nftAddress are required',
      });
    }

    // Validate pagination parameters
    const startIndex = Math.max(0, Number(start));
    const itemCount = Math.min(Math.max(1, Number(count)), MAX_COUNT);

    if (isNaN(startIndex) || isNaN(itemCount)) {
      return res.status(400).json({
        error: 'Invalid pagination parameters. Start and count must be numbers',
      });
    }

    // Normalize addresses to checksum format
    let checksummedAddress: Address | `0x${string}`;
    let checksummedNFTAddress: Address | `0x${string}`;

    try {
      checksummedAddress = getAddress(address);
      checksummedNFTAddress = getAddress(nftAddress);
    } catch (error) {
      return res.status(400).json({
        error: 'Invalid address format',
        details: error instanceof Error ? error.message : 'Unknown error',
      });
    }

    const client = createThirdwebClient({
      clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
    });

    const contract = getContract({
      client,
      chain: optimism,
      address: checksummedNFTAddress,
    });

    try {
      const nfts = (await getOwnedNFTs({
        contract,
        start: startIndex,
        count: itemCount,
        address: checksummedAddress,
      })) as NFTWithSupply[];

      // If looking for a specific token
      if (tokenId !== undefined) {
        const specificToken = nfts.find(
          (nft) => nft.id.toString() === tokenId.toString(),
        );
        return res.status(200).json({
          address: checksummedAddress,
          nftAddress: checksummedNFTAddress,
          tokenId,
          supply: specificToken?.supply.toString(),
          owned: specificToken
            ? Number(specificToken.quantityOwned) > 0
            : false,
          balance: specificToken ? specificToken.quantityOwned.toString() : '0',
        });
      }

      // Calculate total balance
      const totalBalance = nfts.reduce(
        (acc, nft) => acc + Number(nft.quantityOwned),
        0,
      );

      // If no specific tokenId, return paginated list with total balance
      return res.status(200).json({
        address: checksummedAddress,
        nftAddress: checksummedNFTAddress,
        totalBalance,
        nfts: nfts.slice(startIndex, startIndex + itemCount).map((nft) => ({
          id: nft.id.toString(),
          balance: nft.quantityOwned.toString(),
          tokenURI: nft.tokenURI,
          owner: nft.owner,
          metadata: nft.metadata,
          supply: nft.supply.toString(),
          quantityOwned: nft.quantityOwned.toString(),
        })),
        pagination: {
          start: startIndex,
          count: itemCount,
          total: nfts.length,
        },
      });
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      return res.status(500).json({
        error: 'Failed to fetch NFTs',
        details: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
