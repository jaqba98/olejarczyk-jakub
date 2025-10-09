import type { Meta, StoryObj } from '@storybook/angular';

import { SectionBlockComponent } from './section-block.component';

const meta: Meta<SectionBlockComponent> = {
  title: 'component/block/section',
  component: SectionBlockComponent,
};

export default meta;
type Story = StoryObj<SectionBlockComponent>;

export const Dominant: Story = {
  args: {
    id: 'technology',
    title: 'Technology',
    color: 'dominant',
  },
};

export const Complementary: Story = {
  args: {
    ...Dominant.args,
    color: 'complementary',
  },
};

export const Accent: Story = {
  args: {
    ...Dominant.args,
    color: 'accent',
  },
};
