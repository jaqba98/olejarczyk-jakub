import { Meta, StoryObj } from '@storybook/angular';

import { LogoSmartComponent } from './logo-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<LogoSmartComponent> = {
  title: 'Component/Smart/Logo',
  component: LogoSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<LogoSmartComponent>;

export const Default: Story = {};
