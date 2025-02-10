import { Meta, StoryObj } from '@storybook/angular';

import { HomeViewComponent } from './home-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<HomeViewComponent> = {
  title: 'Component/View/Home',
  component: HomeViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<HomeViewComponent>;

export const Default: Story = {};
