import type { Meta, StoryObj } from '@storybook/react';
import { TwitterIcon } from './twitter-icon.presenter';

type Story = StoryObj<typeof TwitterIcon>;

const meta = {
  component: TwitterIcon,
  argTypes: {},
} satisfies Meta<typeof TwitterIcon>;

export default meta;

export const Default: Story = {};
