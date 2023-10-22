import type { Meta, StoryObj } from '@storybook/react';
import { DiscordIcon } from './discord-icon.presenter';

type Story = StoryObj<typeof DiscordIcon>;

const meta = {
  component: DiscordIcon,
  argTypes: {},
} satisfies Meta<typeof DiscordIcon>;

export default meta;

export const Default: Story = {};
