import { Meta, StoryObj } from '@storybook/angular';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { IconDumbComponent } from './icon-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<IconDumbComponent> = {
  title: 'Component/Dumb/Icon',
  component: IconDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<IconDumbComponent>;

export const Default: Story = {
  args: {
    icon: faCoffee,
  },
};
