import type { Meta, StoryObj } from '@storybook/angular';

import { EducationSectionComponent } from './education-section.component';

const meta: Meta<EducationSectionComponent> = {
  title: 'component/section/education',
  component: EducationSectionComponent,
};

export default meta;
type Story = StoryObj<EducationSectionComponent>;

export const Default: Story = {};
