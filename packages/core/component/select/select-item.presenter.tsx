'use client';

import { cn } from '@lockerai/tailwind';
import * as RadixUiSelect from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';
import { CheckIcon } from '#core/icon/check-icon';

type SelectItemProps = Omit<ComponentPropsWithoutRef<typeof RadixUiSelect.Item>, 'className'>;

export const SelectItem = forwardRef<ElementRef<typeof RadixUiSelect.Item>, Omit<SelectItemProps, 'ref'>>(({ children, ...props }, ref) => (
  <RadixUiSelect.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-pointer select-none items-center rounded py-1.5 pl-9 pr-2 text-sm outline-none tablet:text-base',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'focus:bg-sage-4',
    )}
    {...props}
  >
    <span className="absolute left-2 flex items-center justify-center">
      <RadixUiSelect.ItemIndicator>
        <CheckIcon className="h-4 w-4 fill-sage-11" />
      </RadixUiSelect.ItemIndicator>
    </span>
    <RadixUiSelect.ItemText>{children}</RadixUiSelect.ItemText>
  </RadixUiSelect.Item>
));

SelectItem.displayName = RadixUiSelect.Item.displayName;
