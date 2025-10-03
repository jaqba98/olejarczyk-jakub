import type { Meta, StoryObj } from '@storybook/angular';

import { TextDumbComponent } from './text-dumb.component';

const meta: Meta<TextDumbComponent> = {
  title: 'Component/Dumb/Text',
  component: TextDumbComponent,
};

export default meta;
type Story = StoryObj<TextDumbComponent>;

export const Primary: Story = {};
