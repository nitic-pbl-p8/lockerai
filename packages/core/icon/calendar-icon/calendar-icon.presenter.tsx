import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FaCalendarDays } from 'react-icons/fa6';

type CalendarIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CalendarIcon = ({ ...props }: CalendarIconProps): ReactNode => <FaCalendarDays {...props} />;
