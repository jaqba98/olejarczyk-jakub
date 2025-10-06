import type { Meta, StoryObj } from '@storybook/angular';

import { LineDumbComponent } from './line-dumb.component';

const meta: Meta<LineDumbComponent> = {
  title: 'Component/Dumb/Line',
  component: LineDumbComponent,
};

export default meta;
type Story = StoryObj<LineDumbComponent>;

export const Default: Story = {};
