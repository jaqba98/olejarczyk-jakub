import type { Meta, StoryObj } from '@storybook/angular';

import { NavComponent } from './nav.component';

const meta: Meta<typeof NavComponent> = {
  component: NavComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
