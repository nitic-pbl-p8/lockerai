import type { Meta, StoryObj } from '@storybook/react';
import { CodeIcon } from './code-icon.presenter';

type Story = StoryObj<typeof CodeIcon>;

const meta = {
  component: CodeIcon,
  argTypes: {},
} satisfies Meta<typeof CodeIcon>;

export default meta;

export const Default: Story = {};
