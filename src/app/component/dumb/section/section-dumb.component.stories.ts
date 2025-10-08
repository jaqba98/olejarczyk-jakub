import type { Meta, StoryObj } from '@storybook/angular';

import { SectionDumbComponent } from './section-dumb.component';

const meta: Meta<SectionDumbComponent> = {
  title: 'Component/Dumb/Section',
  component: SectionDumbComponent,
};

export default meta;
type Story = StoryObj<SectionDumbComponent>;

export const Dominant: Story = {
  args: {
    id: 'home',
    title: 'Home',
    color: 'dominant',
  },
};

export const Complementary: Story = {
  args: {
    id: 'home',
    title: 'Home',
    color: 'complementary',
  },
};

export const Accent: Story = {
  args: {
    id: 'home',
    title: 'Home',
    color: 'accent',
  },
};

export const Success: Story = {
  args: {
    id: 'home',
    title: 'Home',
    color: 'success',
  },
};
