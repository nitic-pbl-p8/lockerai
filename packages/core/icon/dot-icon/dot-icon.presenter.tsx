import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type DotIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const DotIcon = ({ ...props }: DotIconProps): ReactNode => (
  <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 7.125C6.29837 7.125 6.58452 7.00647 6.7955 6.7955C7.00647 6.58452 7.125 6.29837 7.125 6C7.125 5.70163 7.00647 5.41548 6.7955 5.2045C6.58452 4.99353 6.29837 4.875 6 4.875C5.70163 4.875 5.41548 4.99353 5.2045 5.2045C4.99353 5.41548 4.875 5.70163 4.875 6C4.875 6.29837 4.99353 6.58452 5.2045 6.7955C5.41548 7.00647 5.70163 7.125 6 7.125Z" />
  </svg>
);
