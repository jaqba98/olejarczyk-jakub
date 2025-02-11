import { Meta, StoryObj } from '@storybook/angular';

import { EducationItemDumbComponent } from './education-item-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<EducationItemDumbComponent> = {
  title: 'Component/Dumb/EducationItem',
  component: EducationItemDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<EducationItemDumbComponent>;

export const Default: Story = {
  args: {
    year: '2017 - 2021',
    title: 'Jan Kochanowski University of Kielce',
    course: 'Information technology',
    diploma: 'Engineering diploma',
  },
};
