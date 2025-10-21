import type { Meta, StoryObj } from '@storybook/angular';

import { RootComponent } from './root.component';
import { StoreUtil } from '../../domain/provider/store-domain.provider';

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
