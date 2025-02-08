import type { Meta, StoryObj } from '@storybook/angular';

import { HamburgerSmartComponent } from './hamburger-smart.component';

const meta: Meta<HamburgerSmartComponent> = {
  title: 'Component/Smart/Hamburger',
  component: HamburgerSmartComponent,
};

export default meta;
type Story = StoryObj<HamburgerSmartComponent>;

export const Close: Story = {};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
