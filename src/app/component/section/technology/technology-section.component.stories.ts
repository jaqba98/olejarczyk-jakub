import type { Meta, StoryObj } from '@storybook/angular';

import { TechnologySectionComponent } from './technology-section.component';

const meta: Meta<TechnologySectionComponent> = {
  title: 'component/section/technology',
  component: TechnologySectionComponent,
};

export default meta;
type Story = StoryObj<TechnologySectionComponent>;

export const Default: Story = {};
