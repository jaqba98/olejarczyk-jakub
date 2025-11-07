import type { Meta, StoryObj } from '@storybook/angular';

import { AboutMeSectionComponent } from './about-me-section.component';

const meta: Meta<AboutMeSectionComponent> = {
  title: 'component/section/about-me',
  component: AboutMeSectionComponent,
};

export default meta;
type Story = StoryObj<AboutMeSectionComponent>;

export const Default: Story = {};
