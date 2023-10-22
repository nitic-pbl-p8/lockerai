import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './hero-section.presenter';

type Story = StoryObj<typeof HeroSection>;

const meta = {
  component: HeroSection,
  argTypes: {},
} satisfies Meta<typeof HeroSection>;

export default meta;

export const Default: Story = {};
