import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { NavSmartComponent } from './nav-smart.component';

const meta: Meta<NavSmartComponent> = {
  title: 'Component/Smart/Nav',
  component: NavSmartComponent,
  decorators: [applicationConfig({ ...storeConfig })],
};

export default meta;
type Story = StoryObj<NavSmartComponent>;

export const Default: Story = {};
