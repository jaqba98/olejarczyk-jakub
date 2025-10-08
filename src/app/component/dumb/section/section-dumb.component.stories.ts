import type { Meta, StoryObj } from '@storybook/angular';

import { SectionDumbComponent } from './section-dumb.component';

const meta: Meta<SectionDumbComponent> = {
  title: 'Component/Dumb/Section',
  component: SectionDumbComponent,
};

export default meta;
type Story = StoryObj<SectionDumbComponent>;

export const Default: Story = {
  args: {
    id: 'home',
    title: 'Home',
  },
};
