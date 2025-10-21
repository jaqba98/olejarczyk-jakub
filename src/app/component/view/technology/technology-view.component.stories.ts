import type { Meta, StoryObj } from '@storybook/angular';

import { TechnologyViewComponent } from './technology-view.component';
import { StoreUtil } from '../../../domain/provider/store-domain.provider';

const meta: Meta<TechnologyViewComponent> = {
  title: 'component/view/technology',
  component: TechnologyViewComponent,
  decorators: [...StoreUtil.getStorybookProvide()],
};

export default meta;
type Story = StoryObj<TechnologyViewComponent>;

export const Primary: Story = {};
