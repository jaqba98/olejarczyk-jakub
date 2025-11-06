import type { Meta, StoryObj } from '@storybook/angular';

import { ExperienceSectionComponent } from './experience-section.component';
import { StoreProvider } from '../../../store/provider/store.provider';

const meta: Meta<ExperienceSectionComponent> = {
  title: 'component/section/experience',
  component: ExperienceSectionComponent,
  decorators: StoreProvider.getStorybookProvider(),
};

export default meta;
type Story = StoryObj<ExperienceSectionComponent>;

export const Default: Story = {};
