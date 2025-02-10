import { Meta, StoryObj } from '@storybook/angular';

import { ProjectsViewComponent } from './projects-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ProjectsViewComponent> = {
  title: 'Component/View/Projects',
  component: ProjectsViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ProjectsViewComponent>;

export const Default: Story = {};
