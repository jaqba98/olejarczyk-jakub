import type { Meta, StoryObj } from '@storybook/angular';

import { RootComponent } from './root.component';
import { StoreUtil } from '../../util/store.util';

const meta: Meta<RootComponent> = {
  title: 'component/root',
  component: RootComponent,
  decorators: [...StoreUtil.getStorybookProvide()],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<RootComponent>;

export const Primary: Story = {};
