import type { Meta, StoryObj } from '@storybook/react';
import { ComputerIcon } from './computer-icon.presenter';

type Story = StoryObj<typeof ComputerIcon>;

const meta = {
  component: ComputerIcon,
  argTypes: {},
} satisfies Meta<typeof ComputerIcon>;

export default meta;

export const Default: Story = {};
