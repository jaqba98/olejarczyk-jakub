import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SectionDumbComponent } from './section-dumb.component';
import { ColorType } from '../../../type/color.type';
import { HeaderDumbComponent } from '../header/header-dumb.component';
import { AccentColorBuilder } from '../../../builder/accent-color.builder';

const meta: Meta<SectionDumbComponent> = {
  title: 'Component/Dumb/Section',
  component: SectionDumbComponent,
  decorators: [
    moduleMetadata({
      imports: [HeaderDumbComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<SectionDumbComponent>;

const buildTemplate = (id: string, title: string, color: ColorType) => {
  const accentColor = new AccentColorBuilder();
  return `<section-dumb id="${id}" title="${title}" color="${color}">
    <header-dumb type="h5" content="Content" color="${accentColor.build(color)}"></header-dumb>
  </section-dumb>`;
};

export const Dominant: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.id, args.title, args.color),
  }),
  args: {
    id: 'home',
    title: 'Home',
    color: 'dominant',
  },
};

export const Complementary: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.id, args.title, args.color),
  }),
  args: {
    id: 'home',
    title: 'Home',
    color: 'complementary',
  },
};

export const Accent: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.id, args.title, args.color),
  }),
  args: {
    id: 'home',
    title: 'Home',
    color: 'accent',
  },
};

export const Success: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.id, args.title, args.color),
  }),
  args: {
    id: 'home',
    title: 'Home',
    color: 'success',
  },
};
