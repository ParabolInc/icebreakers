import clsx from "clsx";
import React from "react";

interface Props  {
  className?: string
}

export const Card: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <div className={clsx('bg-white sm:rounded-lg max-w-xl w-full flex flex-col items-center justify-center divide-y shadow-xl', className)}>
      {children}
    </div>
  );
};
