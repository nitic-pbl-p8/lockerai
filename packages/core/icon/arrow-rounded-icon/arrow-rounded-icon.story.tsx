import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRoundedIcon } from './arrow-rounded-icon.presenter';

type Story = StoryObj<typeof ArrowRoundedIcon>;

const meta = {
  component: ArrowRoundedIcon,
  argTypes: {},
} satisfies Meta<typeof ArrowRoundedIcon>;

export default meta;

export const Default: Story = {};
