import type { Meta, StoryObj } from '@storybook/angular';

import { ContactSectionComponent } from './contact-section.component';

const meta: Meta<ContactSectionComponent> = {
  title: 'component/section/contact',
  component: ContactSectionComponent,
};

export default meta;
type Story = StoryObj<ContactSectionComponent>;

export const Primary: Story = {};
