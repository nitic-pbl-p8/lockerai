'use client';

import { cn } from '@lockerai/tailwind';
import * as RadixUiSelect from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

type SelectContentProps = Omit<ComponentPropsWithoutRef<typeof RadixUiSelect.Content>, 'className'>;

export const SelectContent = forwardRef<ElementRef<typeof RadixUiSelect.Content>, Omit<SelectContentProps, 'ref'>>(
  ({ children, position = 'popper', ...props }, ref) => (
    <RadixUiSelect.Portal>
      <RadixUiSelect.Content
        ref={ref}
        position={position}
        className={cn(
          'relative z-20 min-w-[128px] overflow-hidden rounded-md border border-sage-6 bg-sage-2 text-sage-12 shadow-md animate-in fade-in-80',
          position === 'popper' && 'translate-y-2',
        )}
        {...props}
      >
        <RadixUiSelect.Viewport
          className={cn('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]')}
        >
          {children}
        </RadixUiSelect.Viewport>
      </RadixUiSelect.Content>
    </RadixUiSelect.Portal>
  ),
);

SelectContent.displayName = RadixUiSelect.Content.displayName;
