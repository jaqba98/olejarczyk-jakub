import { Meta, StoryObj } from '@storybook/angular';

import { NavDumbComponent } from './nav-dumb.component';

const meta: Meta<NavDumbComponent> = {
  title: 'Component/Dumb/Nav',
  component: NavDumbComponent,
};

export default meta;
type Story = StoryObj<NavDumbComponent>;

export const Default: Story = {};
