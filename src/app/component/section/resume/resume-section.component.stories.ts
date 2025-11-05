import type { Meta, StoryObj } from '@storybook/angular';

import { ResumeSectionComponent } from './resume-section.component';

const meta: Meta<ResumeSectionComponent> = {
  title: 'component/section/resume',
  component: ResumeSectionComponent,
};

export default meta;
type Story = StoryObj<ResumeSectionComponent>;

export const Default: Story = {};
