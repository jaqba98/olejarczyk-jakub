import type { Meta, StoryObj } from '@storybook/angular';

import { SmallDumbComponent } from './small-dumb.component';

const meta: Meta<SmallDumbComponent> = {
  title: 'Component/Dumb/Small',
  component: SmallDumbComponent,
};

export default meta;
type Story = StoryObj<SmallDumbComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: '<small-dumb>Hello World!</small-dumb>',
  }),
};
