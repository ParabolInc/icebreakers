import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...otherProps }, ref: React.Ref<HTMLButtonElement>) => {
  return (
    <button
      ref={ref}
      className={clsx('inline-flex items-center px-6 py-3 text-base font-medium rounded-full shadow-sm hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-parabol', className)}
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';