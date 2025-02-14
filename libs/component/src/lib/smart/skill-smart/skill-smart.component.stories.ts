import { Meta, StoryObj } from '@storybook/angular';

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
    skill: 'html',
  },
};

export const VisualStudioCode: Story = {
  args: {
    skill: 'vscode',
  },
};

export const GitHub: Story = {
  args: {
    skill: 'gitHub',
    isColored: false,
    isPrimaryColor: true,
  },
};
