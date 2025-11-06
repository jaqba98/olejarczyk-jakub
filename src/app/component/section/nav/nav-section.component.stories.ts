import type { Meta, StoryObj } from '@storybook/angular';

import { NavSectionComponent } from './nav-section.component';
import { StoreProvider } from '../../../store/provider/store.provider';

const meta: Meta<NavSectionComponent> = {
  title: 'component/section/nav',
  component: NavSectionComponent,
  decorators: StoreProvider.getStorybookProvider(),
};

export default meta;
type Story = StoryObj<NavSectionComponent>;

export const Default: Story = {};
