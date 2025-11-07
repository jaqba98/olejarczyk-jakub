import type { Meta, StoryObj } from '@storybook/angular';

import { NavSectionComponent } from './nav-section.component';

const meta: Meta<NavSectionComponent> = {
  title: 'component/section/nav',
  component: NavSectionComponent,
};

export default meta;
type Story = StoryObj<NavSectionComponent>;

export const Default: Story = {};
