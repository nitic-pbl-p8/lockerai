import type { Meta, StoryObj } from '@storybook/react';
import { GithubIcon } from './github-icon.presenter';

type Story = StoryObj<typeof GithubIcon>;

const meta = {
  component: GithubIcon,
  argTypes: {},
} satisfies Meta<typeof GithubIcon>;

export default meta;

export const Default: Story = {};
