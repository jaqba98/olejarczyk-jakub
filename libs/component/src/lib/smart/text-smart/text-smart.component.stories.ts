import { Meta, StoryObj } from '@storybook/angular';

import { TextSmartComponent } from './text-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<TextSmartComponent> = {
  title: 'Component/Smart/Text',
  component: TextSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<TextSmartComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-smart>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-smart>`,
  }),
};

export const Uppercase: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-smart [isUppercase]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-smart>`,
  }),
};

export const SecondaryTextColor: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-smart [isSecondaryTextColor]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-smart>`,
  }),
};

export const AccentTextColor: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-smart [isAccentTextColor]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-smart>`,
  }),
};

export const MediumSize: Story = {
  render: (args) => ({
    props: args,
    template: `
    <lib-text-smart [isMediumSize]="true">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eaque in commodi ea,
      explicabo aut at distinctio nesciunt laborum praesentium asperiores numquam facere 
      error iusto est libero provident impedit? Iusto.
    </lib-text-smart>`,
  }),
};
