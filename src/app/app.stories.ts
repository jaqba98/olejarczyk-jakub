import type { Meta, StoryObj } from '@storybook/angular';

import { App } from './app';
import { StoreUtil } from './util/store.util';

const meta: Meta<App> = {
  title: 'App',
  component: App,
  decorators: [...StoreUtil.getStorybookProvide()],
};

export default meta;
type Story = StoryObj<App>;

export const Default: Story = {};
