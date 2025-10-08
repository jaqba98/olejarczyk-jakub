import type { Meta, StoryObj } from '@storybook/angular';

import { TechnologyViewComponent } from './technology-view.component';
import { StoreUtil } from '../../../util/store.util';

const meta: Meta<TechnologyViewComponent> = {
  title: 'Component/View/Technology',
  component: TechnologyViewComponent,
  decorators: [...StoreUtil.getStorybookProvide()],
};

export default meta;
type Story = StoryObj<TechnologyViewComponent>;

export const Primary: Story = {};
