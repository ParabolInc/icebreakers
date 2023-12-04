import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { startTransition, useCallback, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { IcebreakerGenerator } from "../components/IcebreakerGenerator";
import { generateRandomActionLabel } from "../lib/actions";
import {
  allIcebreakers,
  generateRandomIcebreaker,
  Icebreaker,
} from "../lib/api";
import { SSR_CACHE_CONFIG } from "../lib/cache";
import { SEO_CONFIG } from "../lib/seo/config";
import { Card } from "../components/Card";

interface Props {
  initialIcebreaker: Icebreaker;
  initialActionLabel: string;
}

const Embed: NextPage<Props> = ({ initialIcebreaker, initialActionLabel }) => {
  const [icebreaker, setIcebreaker] = useState(initialIcebreaker);
  const [actionLabel, setActionLabel] = useState(initialActionLabel);

  const handleGenerateClick = useCallback(() => {
    const icebreakers = allIcebreakers();

    startTransition(() => {
      setIcebreaker(generateRandomIcebreaker(icebreakers));
      setActionLabel(generateRandomActionLabel());
    });
  }, []);
  useHotkeys("space", handleGenerateClick, { keyup: true }, [
    handleGenerateClick,
  ]);

  return (
    <div className="flex h-full w-full bg-white p-4">
      <NextSeo
        title={SEO_CONFIG.title}
        description={SEO_CONFIG.description}
        canonical={SEO_CONFIG.canonical}
      />
      <Card className="m-auto flex-1">
        <IcebreakerGenerator
          currentIcebreaker={icebreaker}
          actionLabel={actionLabel}
          handleGenerateClick={handleGenerateClick}
        />
      </Card>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Cache-Control", SSR_CACHE_CONFIG);

  const icebreakers = allIcebreakers();
  const props: Props = {
    initialIcebreaker: generateRandomIcebreaker(icebreakers),
    initialActionLabel: generateRandomActionLabel(),
  };

  return {
    props,
  };
};

export default Embed;
