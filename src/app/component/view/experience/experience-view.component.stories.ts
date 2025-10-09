import type { Meta, StoryObj } from '@storybook/angular';

import { ExperienceViewComponent } from './experience-view.component';
import { StoreUtil } from '../../../util/store.util';

const meta: Meta<ExperienceViewComponent> = {
  title: 'component/view/experience',
  component: ExperienceViewComponent,
  decorators: [...StoreUtil.getStorybookProvide()],
};

export default meta;
type Story = StoryObj<ExperienceViewComponent>;

export const Primary: Story = {};
