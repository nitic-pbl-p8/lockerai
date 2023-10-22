import type { Meta, StoryObj } from '@storybook/react';
import { GridIcon } from './grid-icon.presenter';

type Story = StoryObj<typeof GridIcon>;

const meta = {
  component: GridIcon,
  argTypes: {},
} satisfies Meta<typeof GridIcon>;

export default meta;

export const Default: Story = {};
