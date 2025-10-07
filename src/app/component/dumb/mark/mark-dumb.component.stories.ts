import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { MarkDumbComponent } from './mark-dumb.component';
import { SmallDumbComponent } from '../small/small-dumb.component';

const meta: Meta<MarkDumbComponent> = {
  title: 'Component/Dumb/Mark',
  component: MarkDumbComponent,
  decorators: [
    moduleMetadata({
      providers: [SmallDumbComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<MarkDumbComponent>;

export const Primary: Story = {
  args: {
    text: 'Hello world!',
  },
};
