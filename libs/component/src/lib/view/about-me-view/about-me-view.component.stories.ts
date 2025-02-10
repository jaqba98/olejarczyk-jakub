import { Meta, StoryObj } from '@storybook/angular';

import { AboutMeViewComponent } from './about-me-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<AboutMeViewComponent> = {
  title: 'Component/View/AboutMe',
  component: AboutMeViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<AboutMeViewComponent>;

export const Default: Story = {};
