import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { NavDumbComponent } from './nav-dumb.component';
import { MediaSmartComponent } from '../../smart/media-smart/media-smart.component';

const meta: Meta<NavDumbComponent> = {
  title: 'Component/Dumb/Nav',
  component: NavDumbComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<NavDumbComponent>;

export const Default: Story = {};
