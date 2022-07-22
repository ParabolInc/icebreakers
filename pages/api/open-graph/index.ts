import { NextApiRequest, NextApiResponse } from "next";
import { allIcebreakers } from "../../../lib/api";
import { renderScreenshot } from "../../../lib/open-graph/chrome-api";
import { renderHTML } from "../../../lib/open-graph/html-template";
import fs from "fs";

const cacheMaxAge = 60 * 60 * 24 * 365; // a year

const generateImage = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const icebreakerId = parseInt(req.query.id as string);
    const icebreaker = allIcebreakers().find(
      (icebreaker) => icebreaker.id === icebreakerId
    );
    if (!icebreaker) {
      res
        .status(400)
        .json({ error: `Icebreaker with ${icebreakerId} does not exist!` });
      return;
    }

    const html = renderHTML({
      content: icebreaker.question,
    });
    if (process.env.NODE_ENV !== "production") {
      fs.writeFileSync(`./og-image-debug.html`, html);
    }

    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    if (!height || !width) {
      res
        .status(400)
        .json({ error: `Icebreaker with ${icebreakerId} does not exist!` });
      return;
    }

    const openGraphImage = await renderScreenshot({
      html,
      width,
      height,
    });

    if (process.env.NODE_ENV === "production") {
      res.setHeader(
        "Cache-Control",
        `public, immutable, no-transform, s-maxage=${cacheMaxAge}, max-age=${cacheMaxAge}, stale-while-revalidate`
      );
    }

    res.status(200).setHeader("Content-Type", "image/png").end(openGraphImage);
  } catch (e) {
    console.error(e);

    res
      .status(400)
      .json({ error: `Icebreaker with image can not be generated!` });
  }
};

export default generateImage;
