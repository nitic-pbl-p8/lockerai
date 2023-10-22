import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FaFigma } from 'react-icons/fa';

type FigmaIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const FigmaIcon = ({ ...props }: FigmaIconProps): ReactNode => <FaFigma {...props} />;
