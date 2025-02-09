import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { ButtonSmartComponent } from './button-smart.component';
import { MediaSmartComponent } from '../media-smart/media-smart.component';

const meta: Meta<ButtonSmartComponent> = {
  title: 'Component/Smart/Button',
  component: ButtonSmartComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<ButtonSmartComponent>;

export const Default: Story = {
  args: {
    label: 'Click',
    value: 'hello',
  },
};
