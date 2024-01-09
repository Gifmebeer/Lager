import { Address, formatUnits } from 'viem';
import DropERC1155_ABI from '@/abis/DropERC1155.json';
import { NFT_MEMBERSHIP_ADDRESS } from '@/constants/addresses';
import { privateKeyToWalletClient } from '@/utils/web3';

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const { address } = req;

    if (!address) {
      return new Response(
        JSON.stringify({
          error: 'Address missing',
        }),
        {
          status: 400,
        }
      );
    }

    const TOKEN_ID = 1;
    const minterPvtKey = process.env.MINTER_PV_KEY as Address;

    if (!minterPvtKey) {
      return new Response('No attester set', { status: 400 });
    }

    // Set up the account and clients with Viem
    const { walletClient } = privateKeyToWalletClient(minterPvtKey, 80001);

    // NOT WORKING FOR SOME NETWORK ISSUE
    // const sdk = ThirdwebSDK.fromPrivateKey(`${minterPvtKey}`, 'mumbai', {
    //   secretKey: process.env.THIRD_WEB_SECRET_KEY,
    // });
    // const contract = await sdk.getContract(NFT_MEMBERSHIP_ADDRESS);
    // const balance = await contract.erc1155.balance(0);
    // console.log({ balance });

    // Define the parameters for the claim function
    const _receiver = address;

    // Checks balance
    const balance = (await walletClient.readContract({
      address: NFT_MEMBERSHIP_ADDRESS,
      abi: DropERC1155_ABI.abi,
      functionName: 'balanceOf',
      args: [_receiver, TOKEN_ID],
    })) as bigint;

    if (BigInt(balance) > BigInt(0)) {
      return new Response(
        JSON.stringify({
          error: 'You already own this NFT',
          balance: balance?.toString(),
        }),
        {
          status: 400,
        }
      );
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
      address: NFT_MEMBERSHIP_ADDRESS,
      abi: DropERC1155_ABI.abi,
      functionName: 'claim',
      args: _args,
    });
    console.log({ simulation });
    // If simulation is successful, write to the contract
    if (simulation) {
      const transactionRequest = await walletClient.writeContract({
        address: NFT_MEMBERSHIP_ADDRESS,
        abi: DropERC1155_ABI.abi,
        functionName: 'claim',
        args: _args,
      });
      console.log({ transactionRequest });
      return new Response(
        JSON.stringify({ data: 'Claim successful', transactionRequest }),
        {
          status: 200,
        }
      );
    } else {
      return new Response(JSON.stringify({ somethingHappened: true }), {
        status: 400,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
