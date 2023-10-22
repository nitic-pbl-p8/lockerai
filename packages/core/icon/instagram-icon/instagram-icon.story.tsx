import type { Meta, StoryObj } from '@storybook/react';
import { InstagramIcon } from './instagram-icon.presenter';

type Story = StoryObj<typeof InstagramIcon>;

const meta = {
  component: InstagramIcon,
  argTypes: {},
} satisfies Meta<typeof InstagramIcon>;

export default meta;

export const Default: Story = {};
