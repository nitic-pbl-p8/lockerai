import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLinkIcon } from './external-link-icon.presenter';

type Story = StoryObj<typeof ExternalLinkIcon>;

const meta = {
  component: ExternalLinkIcon,
  argTypes: {},
} satisfies Meta<typeof ExternalLinkIcon>;

export default meta;

export const Default: Story = {};
