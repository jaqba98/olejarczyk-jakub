import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { LogoDumbComponent } from './logo-dumb.component';
import { MediaSmartComponent } from '../../smart/media-smart/media-smart.component';

const meta: Meta<LogoDumbComponent> = {
  title: 'Component/Dumb/Logo',
  component: LogoDumbComponent,
  decorators: [
    moduleMetadata({
      imports: [MediaSmartComponent],
    }),
    applicationConfig({ ...storeConfig }),
  ],
};

export default meta;
type Story = StoryObj<LogoDumbComponent>;

export const Long: Story = {
  args: {
    title: 'Jakub Olejarczyk',
  },
};

export const Short: Story = {
  args: {
    title: 'JO',
  },
};
