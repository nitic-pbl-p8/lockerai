import type { Meta, StoryObj } from '@storybook/react';
import { ColorPaletteIcon } from './color-palette-icon.presenter';

type Story = StoryObj<typeof ColorPaletteIcon>;

const meta = {
  component: ColorPaletteIcon,
  argTypes: {},
} satisfies Meta<typeof ColorPaletteIcon>;

export default meta;

export const Default: Story = {};
