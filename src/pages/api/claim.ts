import { NextApiRequest, NextApiResponse } from 'next';
import { Address } from 'viem';
import DropERC1155_ABI from '@/abis/DropERC1155.json';
import { privateKeyToWalletClient } from '@/utils/web3';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = JSON.parse(req.body);
    const { address, nftAddress, tokenId } = query;
    const NFT_ADDRESS = nftAddress as Address;
    if (!address) {
      return res.status(400).json({
        error: 'Address Missing',
      });
    }

    const TOKEN_ID = tokenId;
    const minterPvtKey = process.env.MINTER_PV_KEY as Address;
    console.log('MIN', minterPvtKey);
    if (!minterPvtKey) {
      return res.status(400).json({ error: 'No attester set' });
    }

    // Set up the account and clients with Viem
    const { walletClient } = privateKeyToWalletClient(minterPvtKey);

    // Define the parameters for the claim function
    const _receiver = address;

    // Checks balance
    const balance = (await walletClient.readContract({
      address: NFT_ADDRESS,
      abi: DropERC1155_ABI.abi,
      functionName: 'balanceOf',
      args: [_receiver, TOKEN_ID],
    })) as bigint;

    if (BigInt(balance) > BigInt(0)) {
      return res.status(400).json({
        error: 'You already own this NFT',
        balance: balance?.toString(),
      });
    }
    // ... other parameters as required
    const _allowlistProof = {
      proof: [],
      quantityLimitPerWallet:
        '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      pricePerToken: 0,
      currency: '0x0000000000000000000000000000000000000000',
    };
    const _args = [
      _receiver,
      TOKEN_ID,
      1,
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      0,
      _allowlistProof,
      '0x',
    ];
    // Simulate the contract interaction
    const simulation = await walletClient.simulateContract({
      address: NFT_ADDRESS,
      abi: DropERC1155_ABI.abi,
      functionName: 'claim',
      args: _args,
    });
    console.log({ simulation });
    // If simulation is successful, write to the contract
    if (simulation) {
      const transactionRequest = await walletClient.writeContract({
        address: NFT_ADDRESS,
        abi: DropERC1155_ABI.abi,
        functionName: 'claim',
        args: _args,
      });
      return res.status(200).json({
        data: 'Claim successful',
        transactionRequest,
      });
    } else {
      return res.status(400).json({
        somethingHappened: true,
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
