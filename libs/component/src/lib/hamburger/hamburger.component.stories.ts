import type { Meta, StoryObj } from '@storybook/angular';

import { HamburgerComponent } from './hamburger.component';

const meta: Meta<HamburgerComponent> = {
  component: HamburgerComponent,
};

export default meta;
type Story = StoryObj<HamburgerComponent>;

export const Default: Story = {
  args: {
    size: '3rem',
  },
};
