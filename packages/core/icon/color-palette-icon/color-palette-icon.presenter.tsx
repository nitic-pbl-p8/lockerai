import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { IoColorPaletteOutline } from 'react-icons/io5';

type ColorPaletteIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const ColorPaletteIcon = ({ ...props }: ColorPaletteIconProps): ReactNode => <IoColorPaletteOutline {...props} />;
