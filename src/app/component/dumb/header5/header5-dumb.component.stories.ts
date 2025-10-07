import type { Meta, StoryObj } from '@storybook/angular';

import { Header5DumbComponent } from './header5-dumb.component';

const meta: Meta<Header5DumbComponent> = {
  title: 'Component/Dumb/Header5',
  component: Header5DumbComponent,
};

export default meta;
type Story = StoryObj<Header5DumbComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: '<header5-dumb>Hello World!</header5-dumb>',
  }),
};
