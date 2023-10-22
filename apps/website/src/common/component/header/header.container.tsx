'use client';

import { cn } from '@lockerai/tailwind';
import { usePathname } from 'next/navigation';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Header as HeaderPresenter } from './header.presenter';

export type HeaderProps = Omit<ComponentPropsWithoutRef<typeof HeaderPresenter>, 'className'>;

export const Header = ({ ...props }: HeaderProps): ReactNode => {
  const pathname = usePathname();

  return (
    <HeaderPresenter
      className={cn(
        pathname === '/' ? 'fixed' : 'sticky border-b border-green-6/50 bg-gradient-to-b from-green-1 to-[200%] backdrop-blur-lg',
        'left-0 top-0 z-20',
      )}
      {...props}
    />
  );
};
