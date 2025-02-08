import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { LogoSmartComponent } from './logo-smart.component';

const meta: Meta<LogoSmartComponent> = {
  title: 'Component/Smart/Logo',
  component: LogoSmartComponent,
  decorators: [applicationConfig({ ...storeConfig })],
};

export default meta;
type Story = StoryObj<LogoSmartComponent>;

export const Default: Story = {};
