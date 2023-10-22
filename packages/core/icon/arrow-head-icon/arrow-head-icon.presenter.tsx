import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ArrowHeadIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const ArrowHeadIcon = ({ ...props }: ArrowHeadIconProps): ReactNode => (
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M39.6797 10.6485C39.6797 10.3125 39.5469 9.96875 39.2891 9.71094C38.7734 9.19531 37.9297 9.19531 37.4141 9.71094L19.7656 27.3594L2.375 9.96875C1.85937 9.45312 1.01562 9.45312 0.5 9.96875C-0.015625 10.4844 -0.015625 11.3281 0.5 11.8438L18.8281 30.1797C19.3438 30.6953 20.1875 30.6953 20.7031 30.1797L39.2891 11.5938C39.5547 11.3281 39.6797 10.9922 39.6797 10.6485Z" />
  </svg>
);
