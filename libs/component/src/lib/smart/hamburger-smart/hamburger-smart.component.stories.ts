import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { HamburgerSmartComponent } from './hamburger-smart.component';

const meta: Meta<HamburgerSmartComponent> = {
  title: 'Component/Smart/Hamburger',
  component: HamburgerSmartComponent,
  decorators: [applicationConfig({ ...storeConfig })],
};

export default meta;
type Story = StoryObj<HamburgerSmartComponent>;

export const Default: Story = {};
