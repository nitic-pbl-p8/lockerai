import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { MdComputer } from 'react-icons/md';

type ComputerIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const ComputerIcon = ({ ...props }: ComputerIconProps): ReactNode => <MdComputer {...props} />;
