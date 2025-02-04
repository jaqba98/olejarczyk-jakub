import type { Meta, StoryObj } from '@storybook/angular';

import { MenuComponent } from './menu.component';

const meta: Meta<MenuComponent> = {
  component: MenuComponent,
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {
  args: {
    menu: {
      links: [
        { label: 'Link 1' },
        { label: 'Link 2' },
        { label: 'Link 3' },
        { label: 'Link 4' },
        { label: 'Link 5' },
      ],
    },
  },
};
