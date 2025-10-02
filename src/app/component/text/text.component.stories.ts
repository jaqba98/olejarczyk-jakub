import type { Meta, StoryObj } from '@storybook/angular';

import { TextComponent } from './text.component';

const meta: Meta<TextComponent> = {
  component: TextComponent,
};

export default meta;
type Story = StoryObj<TextComponent>;

export const Primary: Story = {};
