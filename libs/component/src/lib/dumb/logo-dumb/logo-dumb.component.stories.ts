import { Meta, StoryObj } from '@storybook/angular';

import { LogoDumbComponent } from './logo-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<LogoDumbComponent> = {
  title: 'Component/Dumb/Logo',
  component: LogoDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<LogoDumbComponent>;

export const Long: Story = {
  args: {
    title: 'Jakub Olejarczyk',
  },
};

export const Short: Story = {
  args: {
    title: 'JO',
  },
};
