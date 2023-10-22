import { type VariantProps, cn, tv } from '@lockerai/tailwind';
import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react';

const buttonVariant = tv({
  variants: {
    border: {
      true: 'border-2',
    },
    color: {
      purple: 'border-purple-7 bg-purple-3 text-purple-11 hover:bg-purple-4',
      cyan: 'border-cyan-7 bg-cyan-3 text-cyan-11 hover:bg-cyan-4',
      green: 'border-green-7 bg-green-3 text-green-11 hover:bg-green-4',
      sage: 'border-sage-7 bg-sage-3 text-sage-11 hover:bg-sage-4',
    },
    width: {
      auto: 'w-auto',
      full: 'w-full',
    },
  },
  defaultVariants: {
    width: 'auto',
  },
});

type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'className'> & {
  variant?: VariantProps<typeof buttonVariant>;
};

export const Button = forwardRef<ElementRef<'button'>, Omit<ButtonProps, 'ref'>>(
  ({ variant, children, ...props }, ref): ReactNode => (
    <button
      ref={ref}
      className={cn('self-stretch rounded-xl px-5 py-2 text-center text-sm font-bold transition tablet:text-base', buttonVariant({ ...variant }))}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = Button.name;
