import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { NavViewComponent } from './nav-view.component';
import { MediaSmartComponent } from '../../smart/media-smart/media-smart.component';

const meta: Meta<NavViewComponent> = {
  title: 'Component/View/Nav',
  component: NavViewComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<NavViewComponent>;

export const Default: Story = {};
