import type { Meta, StoryObj } from '@storybook/angular';

import { HomeSectionComponent } from './home-section.component';

const meta: Meta<HomeSectionComponent> = {
  title: 'component/section/home',
  component: HomeSectionComponent,
};

export default meta;
type Story = StoryObj<HomeSectionComponent>;

export const Default: Story = {};
