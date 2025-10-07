import type { Meta, StoryObj } from '@storybook/angular';

import { Header4DumbComponent } from './header4-dumb.component';

const meta: Meta<Header4DumbComponent> = {
  title: 'Component/Dumb/Header4',
  component: Header4DumbComponent,
};

export default meta;
type Story = StoryObj<Header4DumbComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: '<header4-dumb>Hello World!</header4-dumb>',
  }),
};
