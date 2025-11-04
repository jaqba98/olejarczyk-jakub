import type { Meta, StoryObj } from '@storybook/angular';

import { ExperienceViewComponent } from './experience-view.component';
import { StoreProvider } from '../../../store/provider/store.provider';

const meta: Meta<ExperienceViewComponent> = {
  title: 'component/view/experience',
  component: ExperienceViewComponent,
  decorators: [...StoreProvider.getStorybookProvider()],
};

export default meta;
type Story = StoryObj<ExperienceViewComponent>;

export const Primary: Story = {};
