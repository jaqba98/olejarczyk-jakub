import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { LogoSmartComponent } from './logo-smart.component';
import { MediaSmartComponent } from '../media-smart/media-smart.component';

const meta: Meta<LogoSmartComponent> = {
  title: 'Component/Smart/Logo',
  component: LogoSmartComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<LogoSmartComponent>;

export const Default: Story = {};
