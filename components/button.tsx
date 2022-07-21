import React, { PropsWithChildren } from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...otherProps }, ref: React.Ref<HTMLButtonElement>) => {
  return (
    <button
      ref={ref}
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-parabol hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-parabol"
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';