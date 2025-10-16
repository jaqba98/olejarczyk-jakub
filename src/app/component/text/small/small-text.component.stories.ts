import type { Meta, StoryObj } from '@storybook/angular';

import { SmallTextComponent } from './small-text.component';

const meta: Meta<SmallTextComponent> = {
  title: 'component/text/small',
  component: SmallTextComponent,
};

export default meta;
type Story = StoryObj<SmallTextComponent>;

export const Heading1: Story = {
  args: {
    value: 'Small',
    color: [['color', 'primary--500']],
  },
};
