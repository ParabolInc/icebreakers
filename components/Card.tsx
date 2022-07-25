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
    <div className={clsx("bg-white shadow-xl sm:rounded-lg", className)}>
      {children}
    </div>
  );
};
