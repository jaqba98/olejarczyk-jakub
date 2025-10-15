import type { Meta, StoryObj } from '@storybook/angular';

import { SectionBlockComponent } from './section-block.component';

const meta: Meta<SectionBlockComponent> = {
  title: 'component/block/section',
  component: SectionBlockComponent,
};

export default meta;
type Story = StoryObj<SectionBlockComponent>;

export const Primary: Story = {
  args: {
    id: 'technology',
    title: 'Technology',
    color: [['background-color', 'gray--100']],
    titleColor: ['color', 'gray--800'],
    debug: true,
  },
};
