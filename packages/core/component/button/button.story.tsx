import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button.presenter';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      description: 'The variant of the this component.',
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Button
      variant={{
        border: true,
        color: 'green',
      }}
    >
      Button
    </Button>
  ),
};
