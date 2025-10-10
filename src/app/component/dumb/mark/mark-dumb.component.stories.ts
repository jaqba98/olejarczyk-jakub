import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { MarkDumbComponent } from './mark-dumb.component';

const meta: Meta<MarkDumbComponent> = {
  title: 'Component/Dumb/Mark',
  component: MarkDumbComponent,
  decorators: [moduleMetadata({})],
};

export default meta;
type Story = StoryObj<MarkDumbComponent>;

export const Primary: Story = {
  args: {
    text: 'Hello world!',
  },
};
