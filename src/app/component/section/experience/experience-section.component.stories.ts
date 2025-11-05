import type { Meta, StoryObj } from '@storybook/angular';

import { ExperienceSectionComponent } from './experience-section.component';

const meta: Meta<ExperienceSectionComponent> = {
  title: 'component/section/experience',
  component: ExperienceSectionComponent,
};

export default meta;
type Story = StoryObj<ExperienceSectionComponent>;

export const Default: Story = {};
