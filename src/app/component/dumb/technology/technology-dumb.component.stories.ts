import type { Meta, StoryObj } from '@storybook/angular';

import { TechnologyDumbComponent } from './technology-dumb.component';

const meta: Meta<TechnologyDumbComponent> = {
  title: 'Component/Dumb/Technology',
  component: TechnologyDumbComponent,
};

export default meta;
type Story = StoryObj<TechnologyDumbComponent>;

export const Default: Story = {
  args: {
    name: 'JavaScript',
  },
};
