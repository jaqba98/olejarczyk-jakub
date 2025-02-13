import { Meta, StoryObj } from '@storybook/angular';

import { TextDumbComponent } from './text-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<TextDumbComponent> = {
  title: 'Component/Dumb/Text',
  component: TextDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<TextDumbComponent>;

export const Default: Story = {
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

export const Uppercase: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-dumb [isUppercase]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-dumb>`,
  }),
};

export const SecondaryTextColor: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-dumb [isSecondaryTextColor]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-dumb>`,
  }),
};

export const AccentTextColor: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-dumb [isAccentTextColor]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-dumb>`,
  }),
};

export const LatterSpacing: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-dumb [isLatterSpacing]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-dumb>`,
  }),
};

export const MediumSize: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-dumb [isMediumSize]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-dumb>`,
  }),
};

export const TextCenter: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-dumb [isTextCenter]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-dumb>`,
  }),
};
