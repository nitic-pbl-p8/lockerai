import type { Meta, StoryObj } from '@storybook/react';
import BrandLogoDarkImage from '#core/asset/brand/brand-logo-dark.png';
import { Image } from './image.presenter';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    src: BrandLogoDarkImage,
    alt: 'The dark brand logo of this website.',
    width: 640,
  },
};
