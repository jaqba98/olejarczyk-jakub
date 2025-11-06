import type { Meta, StoryObj } from '@storybook/angular';

import { HomeSectionComponent } from './home-section.component';
import { StoreProvider } from '../../../store/provider/store.provider';

const meta: Meta<HomeSectionComponent> = {
  title: 'component/section/home',
  component: HomeSectionComponent,
  decorators: StoreProvider.getStorybookProvider(),
};

export default meta;
type Story = StoryObj<HomeSectionComponent>;

export const Default: Story = {};
