import type { Meta, StoryObj } from '@storybook/react';
import { MoonIcon } from './moon-icon.presenter';

type Story = StoryObj<typeof MoonIcon>;

const meta = {
  component: MoonIcon,
  argTypes: {},
} satisfies Meta<typeof MoonIcon>;

export default meta;

export const Default: Story = {};
