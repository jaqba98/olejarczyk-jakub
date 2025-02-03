import type { Meta, StoryObj } from '@storybook/angular';

import { ComponentComponent } from './component.component';

const meta: Meta<typeof ComponentComponent> = {
  component: ComponentComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
