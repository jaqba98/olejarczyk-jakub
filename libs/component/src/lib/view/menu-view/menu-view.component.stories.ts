import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { MenuViewComponent } from './menu-view.component';
import { MediaSmartComponent } from '../../smart/media-smart/media-smart.component';

const meta: Meta<MenuViewComponent> = {
  title: 'Component/View/Menu',
  component: MenuViewComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<MenuViewComponent>;

export const Default: Story = {};
