import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FiExternalLink } from 'react-icons/fi';

type ExternalLinkIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const ExternalLinkIcon = ({ ...props }: ExternalLinkIconProps): ReactNode => <FiExternalLink {...props} />;
