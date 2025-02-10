import { Meta, StoryObj } from '@storybook/angular';

import { CopyrightViewComponent } from './copyright-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<CopyrightViewComponent> = {
  title: 'Component/View/Copyright',
  component: CopyrightViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<CopyrightViewComponent>;

export const Default: Story = {};
