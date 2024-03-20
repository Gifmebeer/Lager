import supabase from '@/utils/supabase/server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { code } = req.body;

    // Check if the code exists
    const { data, error } = await supabase
      .from('bbf2024_gifts')
      .select('*')
      .eq('code', code)
      .single();

    if (error || !data) {
      // If there's an error or the code doesn't exist, return an appropriate message
      return res.status(400).json({ error: 'Code not found' });
    }

    if (data.redeemed) {
      // If the code is already redeemed, return an error
      return res.status(400).json({ error: 'Code already redeemed' });
    }

    // If the code hasn't been redeemed, proceed to mark it as redeemed
    const { error: updateError } = await supabase
      .from('bbf2024_gifts')
      .update({ redeemed: true })
      .match({ id: data.id });

    if (updateError) {
      // Handle any errors that occur during the update
      return res.status(500).json({ error: 'Failed to redeem code' });
    }

    // If everything goes well, return a success message
    return res.status(200).json({ message: 'Code redeemed successfully' });
  } else {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
