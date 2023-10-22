import { BrandIcon } from '@lockerai/core/component/brand-icon';
import { BrandLogo } from '@lockerai/core/component/brand-logo';
import { Button } from '@lockerai/core/component/button';
import { Link } from '@lockerai/core/component/link';
import { cn } from '@lockerai/tailwind';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header = ({ className, ...props }: HeaderProps): ReactNode => (
  <header className={cn('flex w-full items-center justify-between p-3 tablet:px-16 tablet:py-4', className)} {...props}>
    <Link href="/" className="transition hover:opacity-70">
      <span className="sr-only">Locker.ai</span>
      <BrandLogo aria-hidden className="hidden h-11 w-auto tablet:block tablet:h-14" />
      <BrandIcon aria-hidden className="block h-11 w-auto tablet:hidden" />
    </Link>
    <div className="flex items-center gap-6">
      <Button
        variant={{
          border: true,
          color: 'green',
        }}
      >
        Sign in
      </Button>
    </div>
  </header>
);
