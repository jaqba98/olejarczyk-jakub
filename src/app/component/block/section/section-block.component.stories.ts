import type { Meta, StoryObj } from '@storybook/angular';

import { SectionDumbComponent } from './section-block.component';

const meta: Meta<SectionDumbComponent> = {
  title: 'component/block/section',
  component: SectionDumbComponent,
};

export default meta;
type Story = StoryObj<SectionDumbComponent>;

export const Primary: Story = {};
