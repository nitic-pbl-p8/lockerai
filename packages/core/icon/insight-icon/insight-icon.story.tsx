import type { Meta, StoryObj } from '@storybook/react';
import { InsightIcon } from './insight-icon.presenter';

type Story = StoryObj<typeof InsightIcon>;

const meta = {
  component: InsightIcon,
  argTypes: {},
} satisfies Meta<typeof InsightIcon>;

export default meta;

export const Default: Story = {};
