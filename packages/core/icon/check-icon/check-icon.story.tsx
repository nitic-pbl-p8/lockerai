import type { Meta, StoryObj } from '@storybook/react';
import { CheckIcon } from './check-icon.presenter';

type Story = StoryObj<typeof CheckIcon>;

const meta = {
  component: CheckIcon,
  argTypes: {},
} satisfies Meta<typeof CheckIcon>;

export default meta;

export const Default: Story = {};
