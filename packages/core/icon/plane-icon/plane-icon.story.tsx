import type { Meta, StoryObj } from '@storybook/react';
import { PlaneIcon } from './plane-icon.presenter';

type Story = StoryObj<typeof PlaneIcon>;

const meta = {
  component: PlaneIcon,
  argTypes: {},
} satisfies Meta<typeof PlaneIcon>;

export default meta;

export const Default: Story = {};
