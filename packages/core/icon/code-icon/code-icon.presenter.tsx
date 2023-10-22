import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { HiOutlineCode } from 'react-icons/hi';

type CodeIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CodeIcon = ({ ...props }: CodeIconProps): ReactNode => <HiOutlineCode {...props} />;
