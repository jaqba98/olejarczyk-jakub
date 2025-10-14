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
    color: [['background-color', 'primary--500']],
    id: 'technology',
    title: 'Technology',
  },
};
