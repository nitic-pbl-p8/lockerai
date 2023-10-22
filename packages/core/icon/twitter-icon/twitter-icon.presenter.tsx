import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { RiTwitterXFill } from 'react-icons/ri';

type TwitterIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const TwitterIcon = ({ ...props }: TwitterIconProps): ReactNode => <RiTwitterXFill {...props} />;
