import { Link } from '#core/component/link';
import { type VariantProps, cn, tv } from '@lockerai/tailwind';
import { usePathname } from 'next/navigation';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useMemo } from 'react';

const headerLinkVariant = tv({
  base: 'flex items-center justify-center rounded-t-lg p-3 font-bold hover:bg-sage-3',
  variants: {
    selected: {
      true: 'border-b-2 border-sage-12 text-sage-12',
      false: 'text-sage-11',
    },
  },
  defaultVariants: {
    selected: false,
  },
});

type HeaderLinkProps = ComponentPropsWithoutRef<typeof Link> & VariantProps<typeof headerLinkVariant>;

export const HeaderLink = ({ children, className, ...props }: HeaderLinkProps): ReactNode => {
  // Retrieve the current path starting with /.
  // Refer: https://nextjs.org/docs/app/api-reference/functions/use-pathname
  const currentPath = usePathname(); // e.g. `/docs/works/shelfree`
  // Check if the current path is the same as the href.
  const isBeingOpened = useMemo(() => !!props.href && currentPath === props.href.toString(), [currentPath, props.href]);

  return (
    <Link className={cn(headerLinkVariant({ selected: isBeingOpened }), className)} {...props}>
      {children}
    </Link>
  );
};
