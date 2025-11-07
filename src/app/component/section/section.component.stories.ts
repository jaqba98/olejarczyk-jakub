import type { Meta, StoryObj } from '@storybook/angular';

import { SectionComponent } from './section.component';

const meta: Meta<SectionComponent> = {
  title: 'component/section',
  component: SectionComponent,
};

export default meta;
type Story = StoryObj<SectionComponent>;

export const Default: Story = {};
