import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BsCheckLg } from 'react-icons/bs';

type CheckIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CheckIcon = ({ ...props }: CheckIconProps): ReactNode => <BsCheckLg {...props} />;
