import { Button } from "./Button";
import { Logo } from "./Logo";
import { Icebreaker } from "../lib/api";

interface Props {
  currentIcebreaker: Icebreaker;
  actionLabel: string;
  handleGenerateClick: () => void;
  handleCopyUrlClick: () => void;
}

export const IcebreakerGenerator = ({
  currentIcebreaker,
  actionLabel,
  handleGenerateClick,
  handleCopyUrlClick,
}: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center divide-y">
      <div className="flex items-center justify-center p-6 sm:p-8">
        <a href="https://parabol.co" target="_blank" rel="noreferrer">
          <Logo className="h-6 w-auto sm:h-8" />
        </a>
      </div>

      <div className="flex w-full flex-col items-center justify-center space-y-8 p-8">
        <div className="flex min-h-[170px] items-center justify-center px-4 text-center text-xl sm:min-h-[100px] sm:px-8">
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

        <div>
          <Button
            className="border border-gray-200 bg-white text-parabol hover:border-gray-300"
            onClick={handleCopyUrlClick}
          >
            Copy this icebreaker URL
          </Button>
        </div>
      </div>
    </div>
  );
};
