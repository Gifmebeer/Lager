import { ethers } from 'ethers';
import DropERC1155_ABI from '@/abis/DropERC1155.json';

// THIS WAS EXCLUSIVE FOR AN AIRDROP, CAN BE REUSED LATER
export const getOwners = async () => {
  const tokenID = 11;
  const contractAddress = '0xcA8602488619dd2A0F6E926d75659554dAcfCa16';

  const provider = new ethers.providers.StaticJsonRpcProvider({
    url: 'https://opt-sepolia.g.alchemy.com/v2/[API_KEY]',
    skipFetchSetup: true,
  });
  const contract = new ethers.Contract(
    contractAddress,
    DropERC1155_ABI.abi,
    provider,
  );
  const filter = contract.filters?.TokensClaimed();
  const events = await contract.queryFilter(filter, 7670376, 'latest');

  const owners = [] as any;
  events.forEach((event: any) => {
    const { receiver, tokenId, value } = event.args;
    if (Number(tokenId.toString()) === tokenID) {
      console.log({ args: event.args });
      owners.push(receiver);
    }
  });

  console.log(owners);
};
