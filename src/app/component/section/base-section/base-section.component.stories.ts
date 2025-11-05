import type { Meta, StoryObj } from '@storybook/angular';

import { BaseSectionComponent } from './base-section.component';

const meta: Meta<BaseSectionComponent> = {
  title: 'component/section/base',
  component: BaseSectionComponent,
};

export default meta;
type Story = StoryObj<BaseSectionComponent>;

export const Default: Story = {};
