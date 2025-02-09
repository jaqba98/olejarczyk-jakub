import { Meta, StoryObj } from '@storybook/angular';

import { HamburgerDumbComponent } from './hamburger-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<HamburgerDumbComponent> = {
  title: 'Component/Dumb/Hamburger',
  component: HamburgerDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<HamburgerDumbComponent>;

export const Close: Story = {};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
