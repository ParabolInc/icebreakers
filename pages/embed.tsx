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
  },[]);
  useHotkeys("space", handleGenerateClick, { keyup: true }, [
    handleGenerateClick,
  ]);

  const handleCopyUrlClick = () => {
    const link = `${process.env.NEXT_PUBLIC_URL}/?id=${icebreaker.id}`;
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="h-full w-full bg-white">
      <NextSeo
        title={SEO_CONFIG.title}
        description={SEO_CONFIG.description}
        canonical={SEO_CONFIG.canonical}
      />
      <IcebreakerGenerator
        currentIcebreaker={icebreaker}
        actionLabel={actionLabel}
        handleGenerateClick={handleGenerateClick}
      />
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
