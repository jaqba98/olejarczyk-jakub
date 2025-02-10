import { Meta, StoryObj } from '@storybook/angular';

import { StorybookUtils } from '@olejarczyk-jakub/component';
import { CopyrightViewComponent } from './copyright-view.component';

const meta: Meta<CopyrightViewComponent> = {
  title: 'View/Copyright',
  component: CopyrightViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<CopyrightViewComponent>;

export const Default: Story = {};
