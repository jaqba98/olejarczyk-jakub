import type { Meta, StoryObj } from '@storybook/angular';

import { ParagraphDumbComponent } from './paragraph-dumb.component';

const meta: Meta<ParagraphDumbComponent> = {
  title: 'Component/Dumb/Paragraph',
  component: ParagraphDumbComponent,
};

export default meta;
type Story = StoryObj<ParagraphDumbComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: '<paragraph-dumb>Hello World!</paragraph-dumb>',
  }),
};
