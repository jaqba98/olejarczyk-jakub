import type { Meta, StoryObj } from '@storybook/angular';

import { ProjectViewComponent } from './project-view.component';
import { StoreProvider } from '../../../store/provider/store.provider';

const meta: Meta<ProjectViewComponent> = {
  title: 'component/view/project',
  component: ProjectViewComponent,
  decorators: [...StoreProvider.getStorybookProvider()],
};

export default meta;
type Story = StoryObj<ProjectViewComponent>;

export const Primary: Story = {};
