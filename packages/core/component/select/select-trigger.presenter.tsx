'use client';

import { type VariantProps, cn, tv } from '@lockerai/tailwind';
import * as RadixUiSelect from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react';

const selectTriggerVatiant = tv({
  variants: {
    asIcon: {
      true: 'h-auto w-auto rounded-full p-2',
    },
    color: {
      sage: null,
    },
  },
  defaultVariants: {
    asIcon: false,
  },
  slots: {
    base: null,
    icon: null,
  },
  compoundSlots: [
    {
      slots: [`base`],
      color: `sage`,
      className: 'border-sage-6 bg-sage-3 text-sage-12 ring-sage-7 hover:bg-sage-4 focus:border-sage-7',
    },
    {
      slots: [`icon`],
      color: `sage`,
      className: 'fill-sage-12',
    },
  ],
});

type SelectTriggerProps = Omit<ComponentPropsWithoutRef<typeof RadixUiSelect.Trigger>, 'className'> & {
  icon?: (props: Omit<ComponentPropsWithoutRef<'svg'>, 'children'>) => ReactNode;
  variant?: VariantProps<typeof selectTriggerVatiant>;
};

export const SelectTrigger = forwardRef<ElementRef<typeof RadixUiSelect.Trigger>, Omit<SelectTriggerProps, 'ref'>>(
  ({ icon: Icon, variant, children, ...props }, ref) => {
    const { base, icon } = selectTriggerVatiant({ ...variant });

    return (
      <RadixUiSelect.Trigger
        ref={ref}
        className={cn(
          'flex items-center justify-between gap-8 rounded-md border p-4 text-sm transition',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          base(),
        )}
        {...props}
      >
        {children}
        {!variant?.asIcon && (
          <RadixUiSelect.Icon asChild={!!Icon}>{Icon && <Icon className={cn('h-7 w-7 opacity-70', icon())} />}</RadixUiSelect.Icon>
        )}
      </RadixUiSelect.Trigger>
    );
  },
);

SelectTrigger.displayName = RadixUiSelect.Trigger.displayName;
