import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { Skeleton } from './skeleton.presenter';

type Story = StoryObj<typeof Skeleton>;

const meta = {
  component: Skeleton,
  argTypes: {
    variant: {
      description: 'The variant of the this component.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type ChildProps = Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

const Child = ({ ...props }: ChildProps): ReactNode => (
  <div className="flex w-96 flex-col gap-8 rounded-3xl bg-sage-1 p-5" {...props}>
    <div className="flex items-center gap-4">
      <div className="h-8 w-8 shrink-0 rounded-full bg-sage-3" />
      <div className="h-8 grow rounded-full bg-sage-3" />
    </div>
    <div className="flex flex-col gap-4">
      <div className="h-24 w-full rounded-2xl bg-sage-3" />
      <div className="h-8 w-full rounded-2xl bg-sage-3" />
    </div>
  </div>
);

export const Default: Story = {
  render: ({ ...props }) => (
    <Skeleton {...props} className="w-fit rounded-3xl">
      <Child />
    </Skeleton>
  ),
};

export const EffectHidden: Story = {
  ...Default,
  render: ({ ...props }) => (
    <Skeleton
      {...props}
      variant={{
        'effect-hidden': true,
      }}
      className="w-fit rounded-3xl"
    >
      <Child />
    </Skeleton>
  ),
};
