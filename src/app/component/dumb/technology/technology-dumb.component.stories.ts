import type { Meta, StoryObj } from '@storybook/angular';

import { TechnologyDumbComponent } from './technology-dumb.component';

const meta: Meta<TechnologyDumbComponent> = {
  title: 'component/dumb/technology',
  component: TechnologyDumbComponent,
};

export default meta;
type Story = StoryObj<TechnologyDumbComponent>;

export const Default: Story = {
  args: {
    value: 'Enterprise Architect',
    icon: 'devicon-javascript-plain',
    rootColor: 'accent',
  },
};
