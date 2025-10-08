import type { Meta, StoryObj } from '@storybook/angular';

import { FlexItemDumbComponent } from './flex-item-dumb.component';

const meta: Meta<FlexItemDumbComponent> = {
  title: 'Component/Dumb/FlexItem',
  component: FlexItemDumbComponent,
};

export default meta;
type Story = StoryObj<FlexItemDumbComponent>;

export const Default: Story = {};
