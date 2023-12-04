import type { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Card } from "../components/Card";
import { IcebreakerGenerator } from "../components/IcebreakerGenerator";
import { GitHub } from "../components/icons/GitHub";
import { Zoom } from "../components/icons/Zoom";
import { Mark } from "../components/Mark";
import { LinkIcon } from "../components/LinkIcon";
import { generateRandomActionLabel } from "../lib/actions";
import {
  allIcebreakers,
  generateRandomIcebreaker,
  Icebreaker,
} from "../lib/api";
import { SSR_CACHE_CONFIG } from "../lib/cache";
import { SEO_CONFIG } from "../lib/seo/config";
import { Button } from "../components/Button";
import { Logo } from "../components/LogoDark";

const PARABOL_URI = `https://www.parabol.co/?utm_campaign=icebreakers&utm_medium=icebreaker-app&utm_source=icebreaker-app`;

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

      <Card className="m-auto w-full max-w-xl divide-y">
        <div className="flex items-center justify-center p-5 sm:p-6 sm:pt-7">
          <a href={PARABOL_URI}>
            <Logo className="h-6 w-auto sm:h-8" />
          </a>
        </div>

        <IcebreakerGenerator  
          currentIcebreaker={currentIcebreaker}
          actionLabel={actionLabel}
          handleGenerateClick={handleGenerateClick}
        />
      </Card>

      <div className="mx-4 mt-auto mb-4 inline-flex flex-col items-center justify-center gap-2 text-center text-white">
        <Button
          className="mt-4 inline-block text-sm shadow-none hover:underline focus:ring-2 focus:ring-offset-0"
          onClick={handleCopyUrlClick}
        >
          <LinkIcon className="mr-2 inline-block h-4 w-4" />
          Copy this icebreaker URL
        </Button>
      </div>

      <footer className="mt-4 flex flex-1 justify-center">
        <div className="group mx-4 mt-auto mb-4 inline-flex flex-col items-center justify-center gap-2 text-center text-white">
          <div className="flex gap-2">
            <a
              href="https://github.com/ParabolInc/icebreakers/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="h-5 w-auto" />
            </a>
            <a
              className="text-sm underline"
              href="https://parabol.co"
              target="_blank"
              rel="noreferrer"
            >
              <Mark className="h-5 w-auto group-hover:animate-spin" />
            </a>
            <Link href="/api/zoom/install" passHref>
              <Zoom className="h-5 w-auto" />
            </Link>
          </div>
          <a
            className="text-sm underline"
            href="https://parabol.co"
            target="_blank"
            rel="noreferrer"
          >
            Help your team connect & improve with an agile meeting co-pilot
          </a>
        </div>
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
