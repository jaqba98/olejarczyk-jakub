import type { Meta, StoryObj } from '@storybook/angular';

import { ParagraphComponent } from './paragraph.component';

const meta: Meta<ParagraphComponent> = {
  component: ParagraphComponent,
};

export default meta;
type Story = StoryObj<ParagraphComponent>;

export const Primary: Story = {};
