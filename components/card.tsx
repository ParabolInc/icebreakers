import React from "react";

export const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white rounded-lg max-w-xl w-full flex flex-col items-center justify-center divide-y shadow-xl">
      {children}
    </div>
  );
};
