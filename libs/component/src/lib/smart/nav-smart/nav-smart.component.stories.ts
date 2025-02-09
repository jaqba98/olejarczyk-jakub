import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { NavSmartComponent } from './nav-smart.component';
import { MediaSmartComponent } from '../media-smart/media-smart.component';

const meta: Meta<NavSmartComponent> = {
  title: 'Component/Smart/Nav',
  component: NavSmartComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<NavSmartComponent>;

export const Default: Story = {};
