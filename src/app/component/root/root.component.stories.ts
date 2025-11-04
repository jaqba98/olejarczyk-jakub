import type { Meta, StoryObj } from '@storybook/angular';

import { RootComponent } from './root.component';
import { StoreProvider } from '../../store/provider/store.provider';

const meta: Meta<RootComponent> = {
  title: 'component/root',
  component: RootComponent,
  decorators: [...StoreProvider.getStorybookProvider()],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<RootComponent>;

export const Primary: Story = {};
