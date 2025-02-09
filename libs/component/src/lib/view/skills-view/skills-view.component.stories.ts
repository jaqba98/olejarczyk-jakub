import { Meta, StoryObj } from '@storybook/angular';

import { SkillsViewComponent } from './skills-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<SkillsViewComponent> = {
  title: 'Component/View/Skills',
  component: SkillsViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<SkillsViewComponent>;

export const Default: Story = {};
