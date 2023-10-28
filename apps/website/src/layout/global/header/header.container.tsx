'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { usePathname } from 'next/navigation';
import { type ComponentPropsWithoutRef, type ReactNode, useEffect, useState } from 'react';
import { Header as HeaderPresenter } from './header.presenter';

export type HeaderProps = Omit<ComponentPropsWithoutRef<typeof HeaderPresenter>, 'className' | 'variant'>;

export const Header = ({ user: initialUser, ...props }: HeaderProps): ReactNode => {
  const [user, setUser] = useState(initialUser);
  const pathname = usePathname();

  const supabase = createClientComponentClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        setUser({
          id: session.user.id,
          name: session.user.user_metadata['full_name'],
          avatar_url: session.user.user_metadata['avatar_url'],
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <HeaderPresenter
      user={user}
      variant={{
        'hidden-navigation': pathname === '/',
      }}
      {...props}
    />
  );
};
