import type { Meta, StoryObj } from '@storybook/angular';

import { ProjectSectionComponent } from './project-section.component';

const meta: Meta<ProjectSectionComponent> = {
  title: 'component/section/project',
  component: ProjectSectionComponent,
};

export default meta;
type Story = StoryObj<ProjectSectionComponent>;

export const Primary: Story = {};
