import type { Meta, StoryObj } from '@storybook/react';
import { DotIcon } from './dot-icon.presenter';

type Story = StoryObj<typeof DotIcon>;

const meta = {
  component: DotIcon,
  argTypes: {},
} satisfies Meta<typeof DotIcon>;

export default meta;

export const Default: Story = {};
