import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { startTransition } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Logo } from "../components/logo";
import { generateRandomActionLabel } from "../lib/actions";
import {
  allIcebreakers,
  generateRandomIcebreaker,
  Icebreaker,
} from "../lib/airtable";

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
    navigator.clipboard.writeText(`${location.href}/?id=${icebreaker.id}`);
  }
  useHotkeys("space", handleGenerateClick);

  return (
    <div className="h-full w-full">
      <Head>
        <title>Parabol | Icebreakers</title>
        <meta name="description" content="Generate random icebreakers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full flex flex-col justify-center items-center">
        <Card>
          <div className="w-full p-8 flex items-center justify-center">
            <a href="https://parabol.co" target="_blank" rel="noreferrer">
              <Logo className="w-auto h-8" />
            </a>
          </div>

          <div className="w-full p-8 flex flex-col items-center justify-center space-y-8">
            <div className="text-xl min-h-[100px] flex items-center justify-center text-center px-8">
              {icebreaker.question}
            </div>
            <div>
              <Button className="bg-parabol text-white" onClick={handleGenerateClick}>{actionLabel}</Button>
              <div className="text-xs mt-2 text-center">or press space...</div>
            </div>

            <div>
              <Button className="bg-white text-parabol border border-gray-200" onClick={handleCopyClick}>Copy this icebreaker URL</Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const icebreakers = await allIcebreakers();

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

  const icebreaker = icebreakers.find((icebreaker) => icebreaker.id === query.id);
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
  }
};

export default Icebreaker;
