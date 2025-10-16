import type { Meta, StoryObj } from '@storybook/angular';

import { NavViewComponent } from './nav-view.component';

const meta: Meta<NavViewComponent> = {
  title: 'component/view/nav',
  component: NavViewComponent,
};

export default meta;
type Story = StoryObj<NavViewComponent>;

export const Primary: Story = {};
