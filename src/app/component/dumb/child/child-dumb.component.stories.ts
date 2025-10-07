import type { Meta, StoryObj } from '@storybook/angular';

import { ChildDumbComponent } from './child-dumb.component';

const meta: Meta<ChildDumbComponent> = {
  title: 'Component/Dumb/Child',
  component: ChildDumbComponent,
};

export default meta;
type Story = StoryObj<ChildDumbComponent>;

export const GapNone: Story = {
  args: {
    flex: 1,
  },
};
