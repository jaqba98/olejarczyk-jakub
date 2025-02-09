import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { HamburgerSmartComponent } from './hamburger-smart.component';
import { MediaSmartComponent } from '../media-smart/media-smart.component';

const meta: Meta<HamburgerSmartComponent> = {
  title: 'Component/Smart/Hamburger',
  component: HamburgerSmartComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<HamburgerSmartComponent>;

export const Default: Story = {};
