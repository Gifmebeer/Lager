import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/utils/supabase/server'; // Adjust the import path as necessary

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { form } = req.body; // Assuming the JSON object comes in the `form` key

    // Insert the form data into the database
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([{ form }]);

    if (error) {
      console.error('Error inserting form data:', error);
      return res.status(500).json({ error: 'Failed to save form data' });
    }

    // Successfully inserted the form data
    return res
      .status(200)
      .json({ message: 'Form data saved successfully', data });
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
}
