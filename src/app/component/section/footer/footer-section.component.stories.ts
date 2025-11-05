import type { Meta, StoryObj } from '@storybook/angular';

import { FooterSectionComponent } from './footer-section.component';

const meta: Meta<FooterSectionComponent> = {
  title: 'component/section/footer',
  component: FooterSectionComponent,
};

export default meta;
type Story = StoryObj<FooterSectionComponent>;

export const Default: Story = {};
