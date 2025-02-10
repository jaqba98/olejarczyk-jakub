import { Meta, StoryObj } from '@storybook/angular';

import { TitleViewComponent } from './title-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<TitleViewComponent> = {
  title: 'Component/View/Title',
  component: TitleViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<TitleViewComponent>;

export const Default: Story = {};
