import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BrandLogoPrimitive } from './brand-logo-primitive.presenter';
import { BrandLogoWithAnimation } from './brand-logo-with-animation.presenter';

type BrandLogoProps<T extends boolean> = {
  withAnimate?: T;
} & T extends true
  ? { withAnimate?: T } & ComponentPropsWithoutRef<typeof BrandLogoWithAnimation>
  : { withAnimate?: T } & ComponentPropsWithoutRef<typeof BrandLogoPrimitive>;

export const BrandLogo = <T extends boolean>({ withAnimate, ...props }: BrandLogoProps<T>): ReactNode =>
  withAnimate ? <BrandLogoWithAnimation {...props} /> : <BrandLogoPrimitive {...props} />;
