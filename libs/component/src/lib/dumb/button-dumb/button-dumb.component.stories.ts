import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { ButtonDumbComponent } from './button-dumb.component';
import { MediaSmartComponent } from '../../smart/media-smart/media-smart.component';

const meta: Meta<ButtonDumbComponent> = {
  title: 'Component/Dumb/Button',
  component: ButtonDumbComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<ButtonDumbComponent>;

export const Default: Story = {
  args: {
    label: 'Click',
    value: 'hello',
  },
};
