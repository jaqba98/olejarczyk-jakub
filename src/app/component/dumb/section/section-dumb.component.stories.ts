import type { Meta, StoryObj } from '@storybook/angular';

import { SectionDumbComponent } from './section-dumb.component';
import { ColorType } from '../../../type/color.type';

const meta: Meta<SectionDumbComponent> = {
  title: 'Component/Dumb/Section',
  component: SectionDumbComponent,
};

export default meta;
type Story = StoryObj<SectionDumbComponent>;

const buildTemplate = (color: ColorType, maxWidth960px: boolean, marginAuto: boolean) => {
  return `<section-dumb color="${color}" [maxWidth960px]="${maxWidth960px}" [marginAuto]="${marginAuto}"><p>Hello</p></section-dumb>`;
};

export const Dominant: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.color, args.maxWidth960px, args.marginAuto),
  }),
  args: {
    color: 'dominant',
    maxWidth960px: false,
    marginAuto: false,
  },
};

export const Complementary: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.color, args.maxWidth960px, args.marginAuto),
  }),
  args: {
    color: 'complementary',
    maxWidth960px: true,
    marginAuto: false,
  },
};

export const Accent: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.color, args.maxWidth960px, args.marginAuto),
  }),
  args: {
    color: 'accent',
    maxWidth960px: true,
    marginAuto: true,
  },
};
