import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

export const Card: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full max-w-xl flex-col items-center justify-center divide-y bg-white shadow-xl sm:rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};
