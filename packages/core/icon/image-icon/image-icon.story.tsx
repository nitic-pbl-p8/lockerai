import type { Meta, StoryObj } from '@storybook/react';
import { ImageIcon } from './image-icon.presenter';

type Story = StoryObj<typeof ImageIcon>;

const meta = {
  component: ImageIcon,
  argTypes: {},
} satisfies Meta<typeof ImageIcon>;

export default meta;

export const Default: Story = {};
