import { Button } from "./Button";
import { Icebreaker } from "../lib/api";

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
  );
};
