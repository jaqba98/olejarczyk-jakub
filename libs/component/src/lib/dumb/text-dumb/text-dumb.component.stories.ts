import { Meta, StoryObj } from '@storybook/angular';

import { TextDumbComponent } from './text-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<TextDumbComponent> = {
  title: 'Component/Dumb/Text',
  component: TextDumbComponent,
  ...StorybookUtils.decorators(),
  render: (args) => ({
    props: args,
    template: `
    <lib-text-dumb>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-dumb>`,
  }),
};

export default meta;
type Story = StoryObj<TextDumbComponent>;

export const h1: Story = {
  args: { tag: 'h1' },
};

export const h2: Story = {
  args: { tag: 'h2' },
};

export const h3: Story = {
  args: { tag: 'h3' },
};

export const h4: Story = {
  args: { tag: 'h4' },
};

export const h5: Story = {
  args: { tag: 'h5' },
};

export const h6: Story = {
  args: { tag: 'h6' },
};

export const p: Story = {
  args: { tag: 'p' },
};
