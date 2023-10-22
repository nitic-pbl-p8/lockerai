import type { Meta, StoryObj } from '@storybook/react';
import { FigmaIcon } from './figma-icon.presenter';

type Story = StoryObj<typeof FigmaIcon>;

const meta = {
  component: FigmaIcon,
  argTypes: {},
} satisfies Meta<typeof FigmaIcon>;

export default meta;

export const Default: Story = {};
