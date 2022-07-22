import type { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import React, { startTransition, useCallback } from "react";
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
  const handleGenerateClick = useCallback(() => {
    startTransition(() => {
      setIcebreaker(generateRandomIcebreaker(icebreakers));
      setActionLabel(generateRandomActionLabel());
    });
  }, [icebreakers]);
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
  useHotkeys("space", handleGenerateClick, { keyup: true }, [handleGenerateClick]);

  return (
    <main className="flex h-full min-h-0 w-full flex-col">
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
      <header className="flex-1" />

      <Card className="m-auto">
        <div className="flex items-center justify-center p-6 sm:p-8">
          <a href="https://parabol.co" target="_blank" rel="noreferrer">
            <Logo className="h-6 w-auto sm:h-8" />
          </a>
        </div>

        <div className="flex w-full flex-col items-center justify-center space-y-8 p-8">
          <div className="flex min-h-[170px] items-center justify-center px-4 text-center text-xl sm:min-h-[100px] sm:px-8">
            {icebreaker.question}
          </div>
          <div>
            <Button
              className="bg-parabol text-white"
              onClick={handleGenerateClick}
            >
              {actionLabel}
            </Button>
            <div className="mt-2 text-center text-xs">or press space...</div>
          </div>

          <div>
            <Button
              className="border border-gray-200 bg-white text-parabol"
              onClick={handleCopyClick}
            >
              Copy this icebreaker URL
            </Button>
          </div>
        </div>
      </Card>

      <footer className="mt-4 flex flex-1 justify-center">
        <a
          className="group mx-4 mt-auto mb-4 inline-flex flex-col items-center justify-center gap-2 text-center text-white"
          target="_blank"
          href="https://parabol.co"
          rel="noreferrer"
        >
          <Mark className="h-5 w-auto group-hover:animate-spin" />
          <span className="text-sm underline">
            Help your team connect & improve with an agile meeting co-pilot
          </span>
        </a>
      </footer>
    </main>
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
