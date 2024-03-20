import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const query = req.body;
  const { buyerWalletAddress, amount } = query;

  if (!STRIPE_SECRET_KEY) {
    return res.status(400).json({
      error: 'No Stripe secret key found',
    });
  }
  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  });
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    payment_method_types: ['card'],
    // buyerWalletAddress is needed in the webhook.
    metadata: { buyerWalletAddress },
  });

  return res.status(200).json({
    clientSecret: paymentIntent.client_secret,
  });
}
