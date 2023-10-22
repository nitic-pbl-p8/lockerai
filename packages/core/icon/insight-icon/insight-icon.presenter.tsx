import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type InsightIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const InsightIcon = ({ ...props }: InsightIconProps): ReactNode => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 20V10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 20V4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 20V14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
