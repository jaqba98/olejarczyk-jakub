import { Meta, StoryObj } from '@storybook/angular';

import { ContactViewComponent } from './contact-view.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ContactViewComponent> = {
  title: 'Component/View/Contact',
  component: ContactViewComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ContactViewComponent>;

export const Default: Story = {};
