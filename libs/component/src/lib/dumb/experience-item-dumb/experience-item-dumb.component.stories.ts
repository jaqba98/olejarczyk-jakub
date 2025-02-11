import { Meta, StoryObj } from '@storybook/angular';

import { ExperienceItemDumbComponent } from './experience-item-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ExperienceItemDumbComponent> = {
  title: 'Component/Dumb/ExperienceItem',
  component: ExperienceItemDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ExperienceItemDumbComponent>;

export const Default: Story = {
  args: {
    year: '2017 - 2021',
    company: 'APR System',
    profession: 'Full Stack Developer',
    tasks: [],
  },
};
