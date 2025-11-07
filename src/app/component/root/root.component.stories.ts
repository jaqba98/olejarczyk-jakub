import type { Meta, StoryObj } from '@storybook/angular';

import { RootComponent } from './root.component';

const meta: Meta<RootComponent> = {
  title: 'component/root',
  component: RootComponent,
};

export default meta;
type Story = StoryObj<RootComponent>;

export const Default: Story = {};
