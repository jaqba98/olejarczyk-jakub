import { Meta, StoryObj } from '@storybook/angular';

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
