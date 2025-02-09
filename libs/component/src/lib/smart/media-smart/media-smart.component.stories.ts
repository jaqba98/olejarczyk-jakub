import { Meta, StoryObj } from '@storybook/angular';

import { MediaSmartComponent } from './media-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<MediaSmartComponent> = {
  title: 'Component/Smart/Media',
  component: MediaSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<MediaSmartComponent>;

export const Default: Story = {};
