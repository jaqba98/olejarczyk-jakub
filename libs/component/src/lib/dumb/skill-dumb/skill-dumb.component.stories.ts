import { Meta, StoryObj } from '@storybook/angular';

import { SkillItemDumbComponent } from './skill-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';
import { SkillsClassNameEnum } from '@olejarczyk-jakub/model';

const meta: Meta<SkillItemDumbComponent> = {
  title: 'Component/Dumb/Skill',
  component: SkillItemDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<SkillItemDumbComponent>;

export const Default: Story = {
  args: {
    skillClass: SkillsClassNameEnum.html,
  },
};
