import type { NextApiRequest, NextApiResponse } from "next";
import { allIcebreakers, generateRandomIcebreaker, Icebreaker } from "../../../lib/airtable";

type Data = {
  icebreaker: Icebreaker;
} | { error: string };

const randomIcebreaker = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const icebreakers = await allIcebreakers();
    const icebreaker = generateRandomIcebreaker(icebreakers);

    res.status(200).json({ icebreaker });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export default randomIcebreaker;
