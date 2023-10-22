import type { Meta, StoryObj } from '@storybook/react';
import { MailIcon } from './mail-icon.presenter';

type Story = StoryObj<typeof MailIcon>;

const meta = {
  component: MailIcon,
  argTypes: {},
} satisfies Meta<typeof MailIcon>;

export default meta;

export const Default: Story = {};
