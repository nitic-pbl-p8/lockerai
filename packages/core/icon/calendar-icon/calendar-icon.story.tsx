import type { Meta, StoryObj } from '@storybook/react';
import { CalendarIcon } from './calendar-icon.presenter';

type Story = StoryObj<typeof CalendarIcon>;

const meta = {
  component: CalendarIcon,
  argTypes: {},
} satisfies Meta<typeof CalendarIcon>;

export default meta;

export const Default: Story = {};
