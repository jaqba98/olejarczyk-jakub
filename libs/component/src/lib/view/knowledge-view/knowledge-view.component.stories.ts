import { Meta, StoryObj } from '@storybook/angular';

import { KnowledgeViewComponent } from './knowledge-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<KnowledgeViewComponent> = {
  title: 'Component/View/Knowledge',
  component: KnowledgeViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<KnowledgeViewComponent>;

export const Default: Story = {};
