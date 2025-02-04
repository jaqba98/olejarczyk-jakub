import type { Meta, StoryObj } from '@storybook/angular';

import { HamburgerComponent } from './hamburger.component';

const meta: Meta<HamburgerComponent> = {
  title: 'Hamburger',
  component: HamburgerComponent,
};

export default meta;
type Story = StoryObj<HamburgerComponent>;

export const Default: Story = {};
