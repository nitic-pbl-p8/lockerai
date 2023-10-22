'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ThemeProviderProps = ComponentPropsWithoutRef<typeof NextThemesProvider>;

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps): ReactNode => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);
