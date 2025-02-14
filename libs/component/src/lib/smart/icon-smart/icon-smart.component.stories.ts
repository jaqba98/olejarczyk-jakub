import { Meta, StoryObj } from '@storybook/angular';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { IconSmartComponent } from './icon-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<IconSmartComponent> = {
  title: 'Component/Smart/Icon',
  component: IconSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<IconSmartComponent>;

export const Default: Story = {
  args: {
    icon: faCoffee,
  },
};
