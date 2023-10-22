import type { Meta, StoryObj } from '@storybook/react';
import { SunIcon } from './sun-icon.presenter';

type Story = StoryObj<typeof SunIcon>;

const meta = {
  component: SunIcon,
  argTypes: {},
} satisfies Meta<typeof SunIcon>;

export default meta;

export const Default: Story = {};
