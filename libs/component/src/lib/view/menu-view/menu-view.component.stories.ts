import { Meta, StoryObj } from '@storybook/angular';

import { MenuViewComponent } from './menu-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<MenuViewComponent> = {
  title: 'Component/View/Menu',
  component: MenuViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<MenuViewComponent>;

export const Default: Story = {};
