import { Meta, StoryObj } from '@storybook/angular';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { ContactItemDumbComponent } from './contact-item-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ContactItemDumbComponent> = {
  title: 'Component/Dumb/ContactItem',
  component: ContactItemDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ContactItemDumbComponent>;

export const Default: Story = {
  args: {
    icon: faPhone,
    label: '000-000-000',
  },
};
