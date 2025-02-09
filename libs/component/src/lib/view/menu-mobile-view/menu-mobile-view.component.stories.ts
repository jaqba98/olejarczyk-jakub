import { Meta, StoryObj } from '@storybook/angular';

import { MenuMobileViewComponent } from './menu-mobile-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<MenuMobileViewComponent> = {
  title: 'Component/View/MenuMobile',
  component: MenuMobileViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<MenuMobileViewComponent>;

export const Default: Story = {};
