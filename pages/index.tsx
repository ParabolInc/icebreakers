import type {
  GetServerSideProps,
  NextPage,
} from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Card } from "../components/Card";
import { IcebreakerGenerator } from "../components/IcebreakerGenerator";
import { Mark } from "../components/Mark";
import { LinkIcon } from "../components/linkIcon";
import { generateRandomActionLabel } from "../lib/actions";
import {
  allIcebreakers,
  generateRandomIcebreaker,
  Icebreaker,
} from "../lib/api";
import { SSR_CACHE_CONFIG } from "../lib/cache";
import { SEO_CONFIG } from "../lib/seo/config";

interface Props {
  allIcebreakers: Icebreaker[];
  currentIcebreaker: Icebreaker;
  actionLabel: string;
}

const Icebreaker: NextPage<Props> = ({
  allIcebreakers,
  currentIcebreaker,
  actionLabel,
}) => {
  const router = useRouter();
  const handleGenerateClick = useCallback(() => {
    const icebreaker = generateRandomIcebreaker(allIcebreakers);
    router.replace(`/?id=${icebreaker.id}`);
  }, [allIcebreakers, router]);
  useHotkeys("space", handleGenerateClick, { keyup: true }, [
    handleGenerateClick,
  ]);
  const handleCopyUrlClick = () => {
    const link = `${process.env.NEXT_PUBLIC_URL}/?id=${currentIcebreaker.id}`;
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
    router.replace(`/?id=${currentIcebreaker.id}`, undefined, {
      shallow: true,
    });
  };

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
              url: `${process.env.NEXT_PUBLIC_URL}/api/open-graph/?id=${currentIcebreaker.id}&width=1200&height=630`,
              width: 1200,
              height: 630,
              alt: `${currentIcebreaker.question} image`,
              type: "image/png",
            },
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/open-graph/?id=${currentIcebreaker.id}&width=2000&height=1000`,
              width: 2000,
              height: 1000,
              alt: `${currentIcebreaker.question} image`,
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

      <Card className="m-auto w-full max-w-xl">
        <IcebreakerGenerator
          currentIcebreaker={currentIcebreaker}
          actionLabel={actionLabel}
          handleGenerateClick={handleGenerateClick}
          handleCopyUrlClick={handleCopyUrlClick}
        />
      </Card>
      <div
        className="group mx-4 mt-auto mb-4 inline-flex flex-col items-center justify-center gap-2 text-center text-white"
      >
          <a
            className="text-sm underline mt-4 inline-block"
            onClick={handleCopyUrlClick}
            href="#"
          >
            <LinkIcon />
            Copy this icebreaker URL
          </a>
        </div>

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
  res.setHeader("Cache-Control", SSR_CACHE_CONFIG);

  const icebreakers = allIcebreakers();
  if (!query.id) {
    const props: Props = {
      allIcebreakers: icebreakers,
      currentIcebreaker: generateRandomIcebreaker(icebreakers),
      actionLabel: generateRandomActionLabel(),
    };

    return {
      props,
    };
  }

  const icebreakerId = parseInt(query.id as string);
  const currentIcebreaker = icebreakers.find(
    (icebreaker) => icebreaker.id === icebreakerId
  );
  if (currentIcebreaker) {
    const props: Props = {
      allIcebreakers: icebreakers,
      currentIcebreaker,
      actionLabel: generateRandomActionLabel(),
    };

    return { props };
  }

  return {
    notFound: true,
  };
};

export default Icebreaker;
