import type { Meta, StoryObj } from '@storybook/angular';

import { SkillSectionComponent } from './skill-section.component';

const meta: Meta<SkillSectionComponent> = {
  title: 'component/section/skill',
  component: SkillSectionComponent,
};

export default meta;
type Story = StoryObj<SkillSectionComponent>;

export const Default: Story = {};
