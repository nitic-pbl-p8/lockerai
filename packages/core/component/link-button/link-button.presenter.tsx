import { type VariantProps, cn, tv } from '@lockerai/tailwind';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from '#core/component/link';

const linkButtonVariant = tv({
  variants: {
    blur: {
      true: "relative before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:blur-lg before:content-['']",
    },
    border: {
      true: 'border-2',
    },
    color: {
      purple: 'border-purple-7 bg-purple-3 text-purple-11 before:bg-purple-5 hover:bg-purple-4',
      cyan: 'border-cyan-7 bg-cyan-3 text-cyan-11 before:bg-cyan-5 hover:bg-cyan-4',
      green: 'border-green-7 bg-green-3 text-green-11 before:bg-green-5 hover:bg-green-4',
      sage: 'border-sage-7 bg-sage-3 text-sage-11 before:bg-sage-5 hover:bg-sage-4',
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

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: VariantProps<typeof linkButtonVariant>;
};

export const LinkButton = ({ variant, children, ...props }: LinkButtonProps): ReactNode => (
  <Link
    role="button"
    tabIndex={0}
    className={cn(
      'inline-block self-stretch rounded-xl px-7 py-2.5 text-center text-lg font-bold transition tablet:text-xl',
      linkButtonVariant({ ...variant }),
    )}
    {...props}
  >
    {children}
  </Link>
);
