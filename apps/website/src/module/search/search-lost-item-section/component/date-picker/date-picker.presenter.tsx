'use client';

import { Calendar } from '@lockerai/core/component/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@lockerai/core/component/popover';
import { CalendarIcon } from '@lockerai/core/icon/calendar-icon';
import { formatDate } from '@lockerai/core/util/format-date';
import { cn } from '@lockerai/tailwind';
import { type ComponentPropsWithoutRef, type Dispatch, type SetStateAction, useId } from 'react';

type DatePickerProps = Omit<ComponentPropsWithoutRef<'label'>, 'children' | 'className' | 'htmlFor'> & {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  error?: string;
  input?: Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'type' | 'className'>;
};

export const DatePicker = ({ date, setDate, error, input, ...props }: DatePickerProps) => {
  const dateInputId = useId();

  return (
    <Popover>
      <input id={dateInputId} type="date" className="hidden" {...input} />
      <PopoverTrigger asChild>
        <label
          htmlFor={dateInputId}
          className={cn(
            'flex w-fit cursor-pointer flex-col overflow-hidden rounded-xl border border-green-7 bg-sage-3 transition hover:bg-sage-4',
            error && 'border-red-7',
          )}
          {...props}
        >
          <span className="flex w-full items-center justify-between gap-8 border-b border-sage-7 bg-sage-1 px-5 py-3">
            <span className="text-lg font-bold text-sage-11">Date of lost</span>
            {error && <span className="text-base text-red-11">{error}</span>}
          </span>
          <span className="flex items-center justify-between gap-10 px-5 py-3">
            <span className="font-code">
              {date ? <span className="text-sage-12">{formatDate(date, 'MMMM dd, yyyy')}</span> : <span className="text-sage-11">Pick a date</span>}
            </span>
            <CalendarIcon className="h-4 w-4 fill-sage-11" />
          </span>
        </label>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
};
