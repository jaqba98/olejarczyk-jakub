import type { Meta, StoryObj } from '@storybook/angular';

import { IconTextComponent } from './icon-text.component';

const meta: Meta<IconTextComponent> = {
  title: 'component/text/icon',
  component: IconTextComponent,
};

export default meta;
type Story = StoryObj<IconTextComponent>;

export const Dominant: Story = {
  args: {
    icon: 'devicon-angularjs-plain',
    rootColor: 'dominant',
  },
};

export const Accent: Story = {
  args: {
    ...Dominant.args,
    rootColor: 'accent',
  },
};
