import type { Meta, StoryObj } from '@storybook/angular';

import { TechnologyViewComponent } from './technology-view.component';
import { StoreProvider } from '../../../store/provider/store.provider';

const meta: Meta<TechnologyViewComponent> = {
  title: 'component/view/technology',
  component: TechnologyViewComponent,
  decorators: [...StoreProvider.getStorybookProvider()],
};

export default meta;
type Story = StoryObj<TechnologyViewComponent>;

export const Primary: Story = {};
