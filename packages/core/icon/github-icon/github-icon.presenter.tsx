import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BsGithub } from 'react-icons/bs';

type GithubIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const GithubIcon = ({ ...props }: GithubIconProps): ReactNode => <BsGithub {...props} />;
