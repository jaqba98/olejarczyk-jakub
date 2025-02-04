import type { Meta, StoryObj } from '@storybook/angular';

import { MenuComponent } from './menu.component';

const meta: Meta<MenuComponent> = {
  title: 'Menu',
  component: MenuComponent,
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {
  args: {
    horizontal: false,
  },
};

export const Pc: Story = {
  args: {
    horizontal: true,
  },
};
