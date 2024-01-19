import { Image } from '@lockerai/core/component/image';
import { type VariantProps, cn, tv } from '@lockerai/tailwind';
import type { ComponentPropsWithoutRef } from 'react';
import type { CurrentTargetLostItem } from '#website/common/model/lost-item';
import type { User } from '#website/common/model/user';
import { UserActionStatusList } from './component/user-action-status-list/user-action-status-list.presenter';

const pinnedTaskSectionVariants = tv({
  variants: {
    'lost-and-found-state': {
      DELIVERING: null,
      RETRIEVING: null,
    } satisfies Record<Exclude<User['lostAndFoundState'], 'NONE'>, string | null>,
  },
  slots: {
    beacon: null,
    heading: null,
  },
  compoundSlots: [
    {
      slots: ['beacon'],
      'lost-and-found-state': 'DELIVERING',
      className: 'bg-purple-9 before:bg-purple-9',
    },
    {
      slots: ['beacon'],
      'lost-and-found-state': 'RETRIEVING',
      className: 'bg-cyan-9 before:bg-cyan-9',
    },
    {
      slots: ['heading'],
      'lost-and-found-state': 'DELIVERING',
      className: 'text-purple-11',
    },
    {
      slots: ['heading'],
      'lost-and-found-state': 'RETRIEVING',
      className: 'text-cyan-11',
    },
  ],
});

type PinnedTaskSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'> & {
  user: User;
  currentTargetLostItem: CurrentTargetLostItem;
  variant: VariantProps<typeof pinnedTaskSectionVariants>;
};

export const PinnedTaskSection = ({ user, currentTargetLostItem, variant, ...props }: PinnedTaskSectionProps) => {
  const { beacon, heading } = pinnedTaskSectionVariants({ ...variant });

  return (
    <section className="flex flex-col items-center gap-8 px-16 py-12" {...props}>
      <div className="flex flex-col items-center gap-5">
        <h1 className="flex w-fit items-center gap-6">
          <span className={cn('relative h-6 w-6')}>
            <span
              className={cn(
                'absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full opacity-90 duration-1000',
                'before:absolute before:-left-1/2 before:-top-1/2 before:h-6 before:w-6 before:animate-ping before:rounded-full before:opacity-75',
                beacon(),
              )}
            />
          </span>
          <span className="text-5xl font-bold text-sage-12">
            You are currently <span className={heading()}>{user.lostAndFoundState.toLowerCase()}</span>
          </span>
        </h1>
        <p className="max-w-[820px] text-2xl text-sage-11">
          You are in the process of {user.lostAndFoundState.toLowerCase()} a lost item. Please go to the nearest locker and{' '}
          {user.lostAndFoundState === 'DELIVERING' ? 'put in' : 'take out'} the lost item.
        </p>
      </div>
      <div className="flex items-center gap-7">
        <figure className="shrink-0">
          <Image
            src={currentTargetLostItem.lostItem.imageUrls[0]!}
            alt={currentTargetLostItem.lostItem.title}
            width={480}
            height={320}
            sizes="(min-width: 480px) 30vw, 480px"
            className="h-[320px] w-1/3 min-w-[480px] rounded-2xl object-cover"
          />
        </figure>
        <div className="flex w-fit shrink flex-col gap-5">
          <hgroup className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-sage-12">{currentTargetLostItem.lostItem.title}</h2>
            <p className="text-lg text-sage-11">{currentTargetLostItem.lostItem.description}</p>
          </hgroup>
          <UserActionStatusList
            user={user}
            reporter={currentTargetLostItem.reporter}
            owner={currentTargetLostItem.owner}
            lostItem={currentTargetLostItem.lostItem}
          />
        </div>
      </div>
    </section>
  );
};
