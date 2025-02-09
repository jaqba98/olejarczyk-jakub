import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { MediaSmartComponent } from './media-smart.component';

const meta: Meta<MediaSmartComponent> = {
  title: 'Component/Smart/Media',
  component: MediaSmartComponent,
  decorators: [applicationConfig({ ...storeConfig })],
};

export default meta;
type Story = StoryObj<MediaSmartComponent>;

export const Default: Story = {};
