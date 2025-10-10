import type { Meta, StoryObj } from '@storybook/angular';

import { HeadingTextComponent } from './heading-text.component';

const meta: Meta<HeadingTextComponent> = {
  title: 'component/text/heading',
  component: HeadingTextComponent,
};

export default meta;
type Story = StoryObj<HeadingTextComponent>;

export const Heading1: Story = {
  args: {
    level: 1,
    value: 'Heading 1',
    rootColor: 'dominant',
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
    value: 'Heading 2',
    rootColor: 'accent',
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
    value: 'Heading 3',
    rootColor: 'dominant',
  },
};

export const Heading4: Story = {
  args: {
    level: 4,
    value: 'Heading 4',
    rootColor: 'accent',
  },
};

export const Heading5: Story = {
  args: {
    level: 5,
    value: 'Heading 5',
    rootColor: 'dominant',
  },
};

export const Heading6: Story = {
  args: {
    level: 6,
    value: 'Heading 6',
    rootColor: 'accent',
  },
};
