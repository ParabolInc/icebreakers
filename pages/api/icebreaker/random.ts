import type { NextApiRequest, NextApiResponse } from "next";
import {
  allIcebreakers,
  generateRandomIcebreaker,
  Icebreaker,
} from "../../../lib/api";

type Data =
  | {
      icebreaker: Icebreaker;
    }
  | { error: string };

const randomIcebreaker = (_: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const icebreakers = allIcebreakers();
    const icebreaker = generateRandomIcebreaker(icebreakers);

    res.status(200).json({ icebreaker });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default randomIcebreaker;
