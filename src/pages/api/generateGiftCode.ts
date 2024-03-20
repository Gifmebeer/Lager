import { NextApiRequest, NextApiResponse } from 'next';
import { customAlphabet } from 'nanoid';
import NanoDictionary from 'nanoid-dictionary';
import supabase from '@/utils/supabase/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  const { address } = req.body;
  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  try {
    const { data: existingCode, error: findError } = await supabase
      .from('bbf2024_gifts')
      .select()
      .eq('address', address)
      .single();

    if (findError && findError.message !== 'Item not found') {
      throw findError; // Throws if any error other than 'Item not found'
    }

    if (existingCode) {
      return res.status(200).json({ ...existingCode });
    }

    const newCode = customAlphabet(NanoDictionary.nolookalikesSafe, 4)();
    const { error: insertError } = await supabase
      .from('bbf2024_gifts')
      .insert([{ address, code: newCode, redeemed: false }]);

    if (insertError) {
      throw insertError;
    }

    return res.status(200).json({ address, code: newCode, redeemed: false });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
