import { Meta, StoryObj } from '@storybook/angular';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { ContactItemSmartComponent } from './contact-item-smart.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ContactItemSmartComponent> = {
  title: 'Component/Smart/ContactItem',
  component: ContactItemSmartComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ContactItemSmartComponent>;

export const Default: Story = {
  args: {
    icon: faPhone,
    label: '000-000-000',
    link: 'tel:000-000-000',
  },
};
