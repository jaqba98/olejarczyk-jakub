import { Meta, StoryObj } from '@storybook/angular';

import { HamburgerSmartComponent } from './hamburger-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<HamburgerSmartComponent> = {
  title: 'Component/Smart/Hamburger',
  component: HamburgerSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<HamburgerSmartComponent>;

export const Default: Story = {};
