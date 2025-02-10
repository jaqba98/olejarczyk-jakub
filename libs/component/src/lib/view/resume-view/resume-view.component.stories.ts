import { Meta, StoryObj } from '@storybook/angular';

import { ResumeViewComponent } from './resume-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ResumeViewComponent> = {
  title: 'Component/View/Resume',
  component: ResumeViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ResumeViewComponent>;

export const Default: Story = {};
