import { Meta, StoryObj } from '@storybook/angular';

import { ExperienceViewComponent } from './experience-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ExperienceViewComponent> = {
  title: 'Component/View/Experience',
  component: ExperienceViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ExperienceViewComponent>;

export const Default: Story = {};
