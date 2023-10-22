import { type VariantProps, cn, tv } from '@lockerai/tailwind';
import type { ComponentPropsWithRef, ElementRef } from 'react';
import { forwardRef } from 'react';

const skeletonVariant = tv({
  variants: {
    'effect-hidden': {
      true: 'before:hidden',
    },
  },
  defaultVariants: {
    'effect-hidden': false,
  },
});

type SkeletonProps = ComponentPropsWithRef<'div'> & {
  variant?: VariantProps<typeof skeletonVariant>;
};

export const Skeleton = forwardRef<ElementRef<'div'>, Omit<SkeletonProps, 'ref'>>(({ variant, className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'relative isolate inline-block overflow-hidden',
      "before:absolute before:inset-0 before:h-full before:w-full before:-translate-x-full before:animate-[translate-x-full_2s_infinite] before:border-t before:border-light-pure/20 before:bg-gradient-to-r before:from-transparent before:via-light-pure/20 before:to-transparent before:content-['']",
      skeletonVariant({ ...variant }),
      className,
    )}
    {...props}
  >
    {children}
  </span>
));

Skeleton.displayName = Skeleton.name;
