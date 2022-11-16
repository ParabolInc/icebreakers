/* eslint-disable jsx-a11y/alt-text */
import { NextRequest } from "next/server";
import { allIcebreakers } from "../../../lib/api";

import { ImageResponse } from "@vercel/og";
import { OpenGraphImage } from "../../../components/open-graph/OpenGraphImage";

export const config = {
  runtime: "experimental-edge",
};

const generateImage = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const hasId = searchParams.has("id");
    const icebreakerId = hasId ? parseInt(searchParams.get("id")!) : 0;
    const icebreaker = allIcebreakers().find(
      (icebreaker) => icebreaker.id === icebreakerId
    );
    if (!icebreaker) {
      return new Response(
        `Icebreaker with ${icebreakerId} id does not exist!`,
        {
          status: 400,
        }
      );
    }

    const width = parseInt(searchParams.get("width") || "1200");
    const height = parseInt(searchParams.get("height") || "630");

    return new ImageResponse(
      <OpenGraphImage>{icebreaker.question}</OpenGraphImage>,
      {
        width,
        height,
      }
    );
  } catch (e) {
    console.error(e);

    return new Response(`Icebreaker image can not be generated!`, {
      status: 400,
    });
  }
};

export default generateImage;
