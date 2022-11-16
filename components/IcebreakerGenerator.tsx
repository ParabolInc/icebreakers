import { Button } from "./Button";
import { Logo } from "./LogoDark";
import { Icebreaker } from "../lib/api";

const PARABOL_URI = `https://www.parabol.co/?utm_campaign=icebreakers&utm_medium=icebreaker-app&utm_source=icebreaker-app`;

interface Props {
  currentIcebreaker: Icebreaker;
  actionLabel: string;
  handleGenerateClick: () => void;
}

export const IcebreakerGenerator = ({
  currentIcebreaker,
  actionLabel,
  handleGenerateClick,
}: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center divide-y">
      <div className="flex items-center justify-center p-5 sm:p-6 sm:pt-7">
        <a href={PARABOL_URI}>
          <Logo className="h-6 w-auto sm:h-8" />
        </a>
      </div>

      <div className="flex w-full flex-col items-center justify-center space-y-8 p-8">
        <div className="flex min-h-[170px] items-center justify-center px-4 text-center text-2xl sm:min-h-[100px] sm:px-8">
          {currentIcebreaker.question}
        </div>
        <div>
          <Button
            className="bg-parabol text-white hover:brightness-125"
            onClick={handleGenerateClick}
          >
            {actionLabel}
          </Button>
          <div className="mt-2 text-center text-xs">or press space...</div>
        </div>
      </div>
    </div>
  );
};
