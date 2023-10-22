'use client';

import * as RadixUiSelect from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

type SelectLabelProps = Omit<ComponentPropsWithoutRef<typeof RadixUiSelect.Label>, 'className'>;

export const SelectLabel = forwardRef<ElementRef<typeof RadixUiSelect.Label>, Omit<SelectLabelProps, 'ref'>>(({ ...props }, ref) => (
  <RadixUiSelect.Label ref={ref} className="py-1.5 pl-5 text-xs font-bold text-sage-11 tablet:text-sm" {...props} />
));

SelectLabel.displayName = RadixUiSelect.Label.displayName;
