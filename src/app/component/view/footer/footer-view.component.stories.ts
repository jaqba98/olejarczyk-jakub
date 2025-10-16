import type { Meta, StoryObj } from '@storybook/angular';

import { FooterViewComponent } from './footer-view.component';

const meta: Meta<FooterViewComponent> = {
  title: 'component/view/footer',
  component: FooterViewComponent,
};

export default meta;
type Story = StoryObj<FooterViewComponent>;

export const Primary: Story = {};
