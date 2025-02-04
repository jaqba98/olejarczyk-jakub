import type { Meta, StoryObj } from '@storybook/angular';

import { LogoComponent } from './logo.component';

const meta: Meta<LogoComponent> = {
  title: 'Logo',
  component: LogoComponent,
};

export default meta;
type Story = StoryObj<LogoComponent>;

export const Default: Story = {};
