import { Meta, StoryObj } from '@storybook/angular';

import { EducationItemSmartComponent } from './education-item-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<EducationItemSmartComponent> = {
  title: 'Component/Smart/EducationItem',
  component: EducationItemSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<EducationItemSmartComponent>;

export const Default: Story = {
  args: {
    year: '2017 - 2021',
    header: 'Jan Kochanowski University of Kielce',
    course: 'Information technology',
    diploma: 'Engineering diploma',
  },
};
