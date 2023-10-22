import type { Meta, StoryObj } from '@storybook/react';
import { ArrowHeadIcon } from './arrow-head-icon.presenter';

type Story = StoryObj<typeof ArrowHeadIcon>;

const meta = {
  component: ArrowHeadIcon,
  argTypes: {},
} satisfies Meta<typeof ArrowHeadIcon>;

export default meta;

export const Default: Story = {};
