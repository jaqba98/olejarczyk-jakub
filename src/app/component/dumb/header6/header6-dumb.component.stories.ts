import type { Meta, StoryObj } from '@storybook/angular';

import { Header6DumbComponent } from './header6-dumb.component';

const meta: Meta<Header6DumbComponent> = {
  title: 'Component/Dumb/Header6',
  component: Header6DumbComponent,
};

export default meta;
type Story = StoryObj<Header6DumbComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: '<header6-dumb>Hello World!</header6-dumb>',
  }),
};
