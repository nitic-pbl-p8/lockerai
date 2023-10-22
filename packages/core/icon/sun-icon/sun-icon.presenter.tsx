import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BsFillSunFill } from 'react-icons/bs';

type SunIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const SunIcon = ({ ...props }: SunIconProps): ReactNode => <BsFillSunFill {...props} />;
