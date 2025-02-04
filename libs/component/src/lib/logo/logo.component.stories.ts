import type { Meta, StoryObj } from '@storybook/angular';

import { LogoComponent } from './logo.component';

const meta: Meta<LogoComponent> = {
  component: LogoComponent,
};

export default meta;
type Story = StoryObj<LogoComponent>;

export const Default: Story = {
  args: {
    title: 'Jakub Olejarczyk',
  },
};
