import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FaInstagram } from 'react-icons/fa';

type InstagramIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const InstagramIcon = ({ ...props }: InstagramIconProps): ReactNode => <FaInstagram {...props} />;
