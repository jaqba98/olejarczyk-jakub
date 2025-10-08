import type { Meta, StoryObj } from '@storybook/angular';

import { MarginDumbComponent } from './margin-dumb.component';

const meta: Meta<MarginDumbComponent> = {
  title: 'Component/Dumb/Margin',
  component: MarginDumbComponent,
};

export default meta;
type Story = StoryObj<MarginDumbComponent>;

const createTemplate = (args: any, content: string) => {
  return `<margin-dumb
    [autoLeft]="${args.autoLeft}"
    [autoRight]="${args.autoRight}"
    [maxWidth960px]="${args.maxWidth960px}"
  >${content}</margin-dumb>`;
};

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: createTemplate(args, 'Margin Default'),
  }),
  args: {
    autoLeft: false,
    autoRight: false,
    maxWidth960px: false,
  },
};

export const AutoLeft: Story = {
  render: (args) => ({
    props: args,
    template: createTemplate(args, 'Margin Left'),
  }),
  args: {
    autoLeft: true,
    autoRight: false,
    maxWidth960px: true,
  },
};

export const AutoRight: Story = {
  render: (args) => ({
    props: args,
    template: createTemplate(args, 'Margin Right'),
  }),
  args: {
    autoLeft: false,
    autoRight: true,
    maxWidth960px: true,
  },
};

export const AutoCenter: Story = {
  render: (args) => ({
    props: args,
    template: createTemplate(args, 'Margin Center'),
  }),
  args: {
    autoLeft: true,
    autoRight: true,
    maxWidth960px: true,
  },
};

export const MaxWidth960px: Story = {
  render: (args) => ({
    props: args,
    template: createTemplate(args, 'Max Width 960px'),
  }),
  args: {
    autoLeft: true,
    autoRight: true,
    maxWidth960px: true,
  },
};
