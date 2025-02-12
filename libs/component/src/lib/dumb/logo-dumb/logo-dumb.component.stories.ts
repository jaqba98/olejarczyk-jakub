import { Meta, StoryObj } from '@storybook/angular';

import { LogoDumbComponent } from './logo-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';
import { LogoEnum } from '@olejarczyk-jakub/model';

const meta: Meta<LogoDumbComponent> = {
  title: 'Component/Dumb/Logo',
  component: LogoDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<LogoDumbComponent>;

export const LongLogo: Story = {
  args: {
    logo: LogoEnum.full,
  },
};

export const Short: Story = {
  args: {
    logo: LogoEnum.short,
  },
};
