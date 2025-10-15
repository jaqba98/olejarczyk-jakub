import type { Meta, StoryObj } from '@storybook/angular';

import { MarkDumbComponent } from './mark-dumb.component';

const meta: Meta<MarkDumbComponent> = {
  title: 'Component/Dumb/Mark',
  component: MarkDumbComponent,
};

export default meta;
type Story = StoryObj<MarkDumbComponent>;

export const Primary: Story = {
  args: {
    text: 'Hello world!',
    color: [['background-color', 'success']],
  },
};
