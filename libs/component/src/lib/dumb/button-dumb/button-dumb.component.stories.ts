import { Meta, StoryObj } from '@storybook/angular';

import { ButtonDumbComponent } from './button-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ButtonDumbComponent> = {
  title: 'Component/Dumb/Button',
  component: ButtonDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ButtonDumbComponent>;

export const Default: Story = {
  args: {
    label: 'Click',
    value: 'hello',
  },
};
