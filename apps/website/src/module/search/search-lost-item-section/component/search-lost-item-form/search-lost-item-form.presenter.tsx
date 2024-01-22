'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@lockerai/core/component/button';
import { toast } from '@lockerai/core/component/sonner';
import { ErrorIcon } from '@lockerai/core/icon/error-icon';
import { SearchIcon } from '@lockerai/core/icon/search-icon';
import { formatDate } from '@lockerai/core/util/format-date';
import { cn } from '@lockerai/tailwind';
import { type ComponentPropsWithoutRef, useEffect, useId, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import type { LostItem } from '#website/common/model/lost-item';
import type { UserPublicMeta } from '#website/common/model/user';
import { DatePicker } from '#website/module/search/search-lost-item-section/component/date-picker/date-picker.presenter';
import { findSimilarLostItemUseCase } from '~website/src/use-case/find-similar-lost-item';

const formSchema = z.object({
  description: z
    .string({
      required_error: 'A description for the lost item is required.',
    })
    .min(2, 'Description must contain at least 2 characters.'),
  lostAt: z.date({
    required_error: 'A date of lost is required.',
  }),
});

type SearchLostItemFormProps = Omit<ComponentPropsWithoutRef<'form'>, 'children' | 'className'> & {
  onSimilarLostItemFound?: (lostItem: LostItem, reporter: UserPublicMeta) => void;
};

export const SearchLostItemForm = ({ onSimilarLostItemFound, ...props }: SearchLostItemFormProps) => {
  const [lostAt, setLostAt] = useState<Date>();
  const textAreaId = useId();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (!lostAt) {
      return;
    }

    setValue('lostAt', new Date(lostAt));
    trigger('lostAt');
  }, [lostAt, setValue, trigger]);

  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        const data = await findSimilarLostItemUseCase(formData.description, formData.lostAt).catch((error) => {
          toast.error('Failed to search similar lost item.', {
            description: error.message.replace('[GraphQL] ', ''),
            icon: <ErrorIcon />,
          });

          return new Error(error);
        });
        if (data instanceof Error) {
          return;
        }
        if (!data) {
          toast.warning('No similar lost item found.', {
            description: 'Description may be too specific or too abstract. Please try again with different description or date of lost.',
            icon: <ErrorIcon />,
          });

          return;
        }

        onSimilarLostItemFound?.(data.lostItem, data.reporter);
      })}
      className="flex flex-col gap-6"
      {...props}
    >
      <span className="ml-auto">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant={{
            color: isSubmitting ? 'sage' : 'green',
            border: true,
            width: 'fit',
            loading: isSubmitting,
          }}
        >
          Search
          <SearchIcon className="h-5 w-5 fill-green-11" />
        </Button>
      </span>
      <div
        className={cn(
          'flex w-[60vw] max-w-[910px] flex-col overflow-hidden rounded-xl border border-green-7 bg-sage-3',
          errors.description && 'border-red-7',
        )}
      >
        <label
          htmlFor={textAreaId}
          className="flex w-full cursor-pointer items-center justify-between gap-8 border-b border-sage-7 bg-sage-1 px-5 py-3"
        >
          <span className="text-lg font-bold text-sage-11">Description for the lost item</span>
          {errors.description && <span className="text-base text-red-11">{errors.description.message}</span>}
        </label>
        <textarea
          id={textAreaId}
          className="h-[320px] resize-none bg-transparent px-5 py-4 font-code text-sage-12 focus:outline-none"
          {...register('description')}
        />
      </div>
      <Controller
        name="lostAt"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DatePicker
            date={lostAt}
            setDate={setLostAt}
            error={errors.lostAt?.message}
            input={{
              ...field,
              value: lostAt ? formatDate(lostAt, 'yyyy-MM-dd') : '',
              onChange: (event) => {
                setLostAt(new Date(event.target.value));
              },
            }}
          />
        )}
      />
    </form>
  );
};
