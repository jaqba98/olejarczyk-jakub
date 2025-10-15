import type { Meta, StoryObj } from '@storybook/angular';

import { ParagraphTextComponent } from './paragraph-text.component';

const meta: Meta<ParagraphTextComponent> = {
  title: 'component/text/paragraph',
  component: ParagraphTextComponent,
};

export default meta;
type Story = StoryObj<ParagraphTextComponent>;

export const Heading1: Story = {
  args: {
    value: 'Paragraph',
    color: [['color', 'primary--500']],
  },
};
