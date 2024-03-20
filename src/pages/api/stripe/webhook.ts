import { NextApiRequest, NextApiResponse } from 'next';
import { Engine } from '@thirdweb-dev/engine';
import Stripe from 'stripe';
import getRawBody from 'raw-body';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const IS_TEST_MODE = true;

const NFT_CONTRACT = '0xcA8602488619dd2A0F6E926d75659554dAcfCa16';
const NFT_NETWORK = 'op-sepolia-testnet';
const BACKEND_WALLET_ADDRESS = process.env.BACKEND_WALLET_ADDRESS;
const WEBHOOK_SECRET_KEY = process.env.STRIPE_WEBHOOK_SECRET_KEY;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const THIRDWEB_ENGINE_URL = process.env.THIRDWEB_ENGINE_URL;
const THIRDWEB_ENGINE_ACCESS_TOKEN = process.env.THIRDWEB_ENGINE_ACCESS_TOKEN;

export const config = {
  api: { bodyParser: false },
};

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Validate the webhook signature
    // Source: https://stripe.com/docs/webhooks#secure-webhook

    if (!STRIPE_SECRET_KEY) {
      return res.status(400).json({ error: 'No Stripe secret key found' });
    }

    if (!THIRDWEB_ENGINE_ACCESS_TOKEN) {
      return res
        .status(400)
        .json({ error: 'No Thirdweb engine access token found' });
    }

    const body = await getRawBody(req);

    const signature = req.headers['stripe-signature'];
    const stripe = new Stripe(STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16',
    });

    if (!WEBHOOK_SECRET_KEY) {
      return res
        .status(400)
        .json({ error: 'No Stripe webhook secret key found' });
    }
    // Validate and parse the payload.
    const event = stripe.webhooks.constructEvent(
      body,
      signature!,
      WEBHOOK_SECRET_KEY!,
    );
    if (event.type === 'charge.succeeded') {
      const { buyerWalletAddress } = event.data.object.metadata;

      // Mint an NFT to the buyer with Engine.
      const engine = new Engine({
        url: THIRDWEB_ENGINE_URL!,
        accessToken: THIRDWEB_ENGINE_ACCESS_TOKEN!,
      });
      await engine.erc1155.claimTo(
        NFT_NETWORK,
        NFT_CONTRACT,
        BACKEND_WALLET_ADDRESS!,
        {
          receiver: buyerWalletAddress,
          tokenId: '17',
          quantity: '1',
        },
      );
    }

    return res.status(200).json({ message: 'OK' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Internal server error' });
  }
}
