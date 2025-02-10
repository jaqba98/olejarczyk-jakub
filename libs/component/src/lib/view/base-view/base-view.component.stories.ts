import { Meta, StoryObj } from '@storybook/angular';

import { BaseViewComponent } from './base-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<BaseViewComponent> = {
  title: 'Component/View/Base',
  component: BaseViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<BaseViewComponent>;

export const Default: Story = {};
