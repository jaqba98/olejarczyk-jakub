import { Meta, StoryObj } from '@storybook/angular';

import { SkillsClassNameEnum, SkillsTitleEnum } from '@olejarczyk-jakub/model';
import { SkillDumbComponent } from './skill-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<SkillDumbComponent> = {
  title: 'Component/Dumb/Skill',
  component: SkillDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<SkillDumbComponent>;

export const HTML: Story = {
  args: {
    skillTitle: SkillsTitleEnum.html,
    skillClassName: SkillsClassNameEnum.html,
  },
};

export const VisualStudioCode: Story = {
  args: {
    skillTitle: SkillsTitleEnum.vscode,
    skillClassName: SkillsClassNameEnum.vscode,
  },
};

export const GitHub: Story = {
  args: {
    skillTitle: SkillsTitleEnum.gitHub,
    skillClassName: SkillsClassNameEnum.vscode,
    isColored: false,
    isPrimaryColor: true,
  },
};
