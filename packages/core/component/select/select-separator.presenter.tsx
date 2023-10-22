'use client';

import * as RadixUiSelect from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

type SelectSeparatorProps = Omit<ComponentPropsWithoutRef<typeof RadixUiSelect.Separator>, 'children' | 'className'>;

export const SelectSeparator = forwardRef<ElementRef<typeof RadixUiSelect.Separator>, Omit<SelectSeparatorProps, 'ref'>>(({ ...props }, ref) => (
  <RadixUiSelect.Separator ref={ref} className="-mx-1 my-1 h-px bg-sage-6" {...props} />
));

SelectSeparator.displayName = RadixUiSelect.Separator.displayName;
