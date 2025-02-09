import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { HamburgerDumbComponent } from './hamburger-dumb.component';
import { MediaSmartComponent } from '../../smart/media-smart/media-smart.component';

const meta: Meta<HamburgerDumbComponent> = {
  title: 'Component/Dumb/Hamburger',
  component: HamburgerDumbComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<HamburgerDumbComponent>;

export const Close: Story = {};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
