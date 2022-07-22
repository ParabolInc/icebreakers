import type { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import React, { startTransition } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Logo } from "../components/logo";
import { Mark } from "../components/mark";
import { generateRandomActionLabel } from "../lib/actions";
import {
  allIcebreakers,
  generateRandomIcebreaker,
  Icebreaker,
} from "../lib/api";

export const SEO_CONFIG = {
  title: "Parabol | Icebreakers",
  description: "Generate random meeting icebreakers",
  canonical: process.env.PUBLIC_URL,
};

interface Props {
  icebreakers: Icebreaker[];
  initialIcebreaker: Icebreaker;
  initialActionLabel: string;
}

const Icebreaker: NextPage<Props> = ({
  icebreakers,
  initialIcebreaker,
  initialActionLabel,
}) => {
  const [icebreaker, setIcebreaker] = React.useState(initialIcebreaker);
  const [actionLabel, setActionLabel] = React.useState(initialActionLabel);
  const handleGenerateClick = () => {
    startTransition(() => {
      setIcebreaker(generateRandomIcebreaker(icebreakers));
      setActionLabel(generateRandomActionLabel());
    });
  };
  const handleCopyClick = () => {
    const link = `${location.origin}/?id=${icebreaker.id}`;
    const shareData = {
      title: "Check out this icebreaker on Parabol!",
      url: link,
    };
    if (navigator.canShare && navigator.canShare(shareData)) {
      navigator.share(shareData);
      return;
    }

    // fallback to just copy to clipboard
    navigator.clipboard.writeText(shareData.url);
  };
  useHotkeys("space", handleGenerateClick);

  return (
    <div className="h-full w-full flex">
      <NextSeo
        title={SEO_CONFIG.title}
        description={SEO_CONFIG.description}
        canonical={SEO_CONFIG.canonical}
        openGraph={{
          url: SEO_CONFIG.canonical,
          title: SEO_CONFIG.title,
          description: SEO_CONFIG.description,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/open-graph/?id=${icebreaker.id}&width=1200&height=630`,
              width: 1200,
              height: 630,
              alt: `${icebreaker.question} image`,
              type: "image/png",
            },
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/open-graph/?id=${icebreaker.id}&width=900&height=800`,
              width: 2000,
              height: 1000,
              alt: `${icebreaker.question} image`,
              type: "image/png",
            },
          ],
          site_name: SEO_CONFIG.title,
        }}
        twitter={{
          handle: "@parabol",
          cardType: "summary_large_image",
        }}
      />
      <main className="w-full my-auto sm:p-4">
        <Card className="mx-auto">
          <div className="p-6 sm:p-8 flex items-center justify-center">
            <a href="https://parabol.co" target="_blank" rel="noreferrer">
              <Logo className="w-auto h-6 sm:h-8" />
            </a>
          </div>

          <div className="w-full p-8 flex flex-col items-center justify-center space-y-8">
            <div className="text-xl min-h-[100px] flex items-center justify-center text-center px-8">
              {icebreaker.question}
            </div>
            <div>
              <Button
                className="bg-parabol text-white"
                onClick={handleGenerateClick}
              >
                {actionLabel}
              </Button>
              <div className="text-xs mt-2 text-center">or press space...</div>
            </div>

            <div>
              <Button
                className="bg-white text-parabol border border-gray-200"
                onClick={handleCopyClick}
              >
                Copy this icebreaker URL
              </Button>
            </div>
          </div>
        </Card>
        <div className="flex justify-center h-full">
        <a
          className="m-8 gap-2 text-center inline-flex flex-col sm:flex-row items-center justify-center text-white group"
          target="_blank"
          href="https://parabol.co"
          rel="noreferrer"
        >
          <Mark className="h-5 w-auto group-hover:animate-spin" />
          <span className="mt-auto text-sm underline">
            Help your team connect & improve with an agile meeting co-pilot
          </span>
        </a>
        </div>

      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  const icebreakers = allIcebreakers();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=59"
  );

  if (!query.id) {
    return {
      props: {
        icebreakers,
        initialIcebreaker: generateRandomIcebreaker(icebreakers),
        initialActionLabel: generateRandomActionLabel(),
      },
    };
  }

  const icebreakerId = parseInt(query.id as string);
  const icebreaker = icebreakers.find(
    (icebreaker) => icebreaker.id === icebreakerId
  );
  if (icebreaker) {
    return {
      props: {
        icebreakers,
        initialIcebreaker: icebreaker,
        initialActionLabel: generateRandomActionLabel(),
      },
    };
  }

  return {
    notFound: true,
  };
};

export default Icebreaker;
