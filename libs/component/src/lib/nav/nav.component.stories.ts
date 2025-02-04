import type { Meta, StoryObj } from '@storybook/angular';

import { NavComponent } from './nav.component';

const meta: Meta<NavComponent> = {
  title: 'Nav',
  component: NavComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<NavComponent>;

export const Default: Story = {};
