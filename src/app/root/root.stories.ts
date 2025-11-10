import type { Meta, StoryObj } from '@storybook/angular';

import { Root } from './root';
import { StoreProvider } from '../store/provider/store.provider';

const meta: Meta<Root> = {
  title: 'root',
  component: Root,
  decorators: StoreProvider.getStorybookProvider(),
};

export default meta;
type Story = StoryObj<Root>;

export const Default: Story = {};
