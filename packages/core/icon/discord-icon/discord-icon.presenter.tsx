import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BsDiscord } from 'react-icons/bs';

type DiscordIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const DiscordIcon = ({ ...props }: DiscordIconProps): ReactNode => <BsDiscord {...props} />;
