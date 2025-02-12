import { Meta, StoryObj } from '@storybook/angular';

import { ButtonSmartComponent } from './button-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ButtonSmartComponent> = {
  title: 'Component/Smart/Button',
  component: ButtonSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ButtonSmartComponent>;

export const Default: Story = {
  args: {
    label: 'Hello',
  },
};

export const Pressed: Story = {
  args: {
    label: 'Hello',
    isPressed: true,
  },
};
