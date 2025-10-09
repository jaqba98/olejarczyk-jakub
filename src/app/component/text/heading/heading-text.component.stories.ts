import type { Meta, StoryObj } from '@storybook/angular';

import { HeaderTextComponent } from './heading-text.component';

const meta: Meta<HeaderTextComponent> = {
  title: 'component/text/header',
  component: HeaderTextComponent,
};

export default meta;
type Story = StoryObj<HeaderTextComponent>;

export const Header1: Story = {
  args: {
    level: 1,
    value: 'Header 1',
    rootColor: 'dominant',
  },
};

export const Header2: Story = {
  args: {
    level: 2,
    value: 'Header 2',
    rootColor: 'complementary',
  },
};

export const Header3: Story = {
  args: {
    level: 3,
    value: 'Header 3',
    rootColor: 'accent',
  },
};

export const Header4: Story = {
  args: {
    level: 4,
    value: 'Header 4',
    rootColor: 'dominant',
  },
};

export const Header5: Story = {
  args: {
    level: 5,
    value: 'Header 5',
    rootColor: 'complementary',
  },
};

export const Header6: Story = {
  args: {
    level: 6,
    value: 'Header 6',
    rootColor: 'accent',
  },
};
