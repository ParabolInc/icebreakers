import type { NextApiRequest, NextApiResponse } from 'next'
import { allIcebreakers, Icebreaker } from '../../../lib/airtable';

const cacheMaxAge = 60 * 60 * 1 // 1h

type Data = {
  icebreakers: Icebreaker[];
} | { error: string };

const listIcebreakers = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const icebreakers = await allIcebreakers()

    res.status(200).setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=${cacheMaxAge}, max-age=${cacheMaxAge}, stale-while-revalidate`,
    ).json({ icebreakers });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export default listIcebreakers;