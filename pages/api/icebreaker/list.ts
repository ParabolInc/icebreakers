import type { NextApiRequest, NextApiResponse } from "next";
import { allIcebreakers, Icebreaker } from "../../../lib/api";

const cacheMaxAge = 60 * 60 * 1; // 1h

type Data =
  | {
      icebreakers: Icebreaker[];
    }
  | { error: string };

const listIcebreakers = (_: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const icebreakers = allIcebreakers();

    res.status(200).json({ icebreakers });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default listIcebreakers;
