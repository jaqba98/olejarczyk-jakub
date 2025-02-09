import { Meta, StoryObj } from '@storybook/angular';

import { NavViewComponent } from './nav-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<NavViewComponent> = {
  title: 'Component/View/Nav',
  component: NavViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<NavViewComponent>;

export const Default: Story = {};
