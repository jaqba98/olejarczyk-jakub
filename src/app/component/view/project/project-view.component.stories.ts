import type { Meta, StoryObj } from '@storybook/angular';

import { ProjectViewComponent } from './project-view.component';
import { StoreUtil } from '../../../domain/provider/store-domain.provider';

const meta: Meta<ProjectViewComponent> = {
  title: 'component/view/project',
  component: ProjectViewComponent,
  decorators: [...StoreUtil.getStorybookProvide()],
};

export default meta;
type Story = StoryObj<ProjectViewComponent>;

export const Primary: Story = {};
