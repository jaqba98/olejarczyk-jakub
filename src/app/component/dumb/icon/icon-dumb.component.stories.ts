import type { Meta, StoryObj } from '@storybook/angular';

import { IconDumbComponent } from './icon-dumb.component';

const meta: Meta<IconDumbComponent> = {
  title: 'Component/Dumb/Icon',
  component: IconDumbComponent,
};

export default meta;
type Story = StoryObj<IconDumbComponent>;

export const Primary: Story = {
  args: {
    className: 'devicon-angularjs-plain',
  },
};
