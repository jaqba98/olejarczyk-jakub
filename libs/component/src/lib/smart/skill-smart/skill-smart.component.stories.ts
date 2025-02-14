import { Meta, StoryObj } from '@storybook/angular';

import { SkillsTitleEnum, SkillsClassNameEnum } from '@olejarczyk-jakub/model';
import { SkillSmartComponent } from './skill-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<SkillSmartComponent> = {
  title: 'Component/Smart/Skill',
  component: SkillSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<SkillSmartComponent>;

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
