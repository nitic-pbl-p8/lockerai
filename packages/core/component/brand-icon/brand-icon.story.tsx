import type { Meta, StoryObj } from '@storybook/react';
import { BrandIcon } from './brand-icon.presenter';

type Story = StoryObj<typeof BrandIcon>;

const meta = {
  component: BrandIcon,
  argTypes: {},
} satisfies Meta<typeof BrandIcon>;

export default meta;

export const Default: Story = {};
