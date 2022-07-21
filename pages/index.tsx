import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useHotkeys } from 'react-hotkeys-hook'
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Logo } from "../components/logo";
import { allIcebreakers, generateRandomIcebreaker, Icebreaker } from "../lib/airtable";

interface Props {
  icebreakers: Icebreaker[];
  initialIcebreaker: Icebreaker;
}

const Home: NextPage<Props> = ({ icebreakers, initialIcebreaker }) => {
  const [icebreaker, setIcebreaker] = React.useState(initialIcebreaker);
  const handleGenerateClick = async () => {
    setIcebreaker(generateRandomIcebreaker(icebreakers));
  }
  useHotkeys('space', () => { handleGenerateClick() });

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
            <Logo className="w-auto h-14" />
          </div>

          <div className="w-full p-8 flex flex-col items-center justify-center space-y-8">
            <div className="text-xl min-h-[100px] flex items-center justify-center text-center">{icebreaker.question}</div>
            <div>
              <Button onClick={handleGenerateClick}>Generate</Button>
              <div className="text-xs mt-2 text-center">or press space...</div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const icebreakers = await allIcebreakers();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=59'
  )

  return {
    props: {
      icebreakers,
      initialIcebreaker: generateRandomIcebreaker(icebreakers)
    },
  };
};

export default Home;
