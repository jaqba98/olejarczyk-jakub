import type { Meta, StoryObj } from '@storybook/angular';

import { TextDumbComponent } from './text-dumb.component';

const meta: Meta<TextDumbComponent> = {
  title: 'Component/Dumb/Text',
  component: TextDumbComponent,
};

export default meta;
type Story = StoryObj<TextDumbComponent>;

export const P: Story = {
  args: {
    type: 'p',
  },
};

export const H1: Story = {
  args: {
    type: 'h1',
  },
};

export const H2: Story = {
  args: {
    type: 'h2',
  },
};

export const H3: Story = {
  args: {
    type: 'h3',
  },
};

export const H4: Story = {
  args: {
    type: 'h4',
  },
};

export const H5: Story = {
  args: {
    type: 'h5',
  },
};

export const H6: Story = {
  args: {
    type: 'h6',
  },
};

export const Small: Story = {
  args: {
    type: 'small',
  },
};
