import { Meta, StoryObj } from '@storybook/angular';

import { SystemSmartComponent } from './system-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<SystemSmartComponent> = {
  title: 'Component/Smart/System',
  component: SystemSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<SystemSmartComponent>;

export const Default: Story = {};
