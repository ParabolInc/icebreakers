import clsx from "clsx";
import React, { PropsWithChildren } from "react";

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    { children, className, ...otherProps },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center rounded-full px-6 py-3 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-parabol focus:ring-offset-2",
          className
        )}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
