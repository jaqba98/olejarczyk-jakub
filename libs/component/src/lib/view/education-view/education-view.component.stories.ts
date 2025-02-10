import { Meta, StoryObj } from '@storybook/angular';

import { EducationViewComponent } from './education-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<EducationViewComponent> = {
  title: 'Component/View/Education',
  component: EducationViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<EducationViewComponent>;

export const Default: Story = {};
