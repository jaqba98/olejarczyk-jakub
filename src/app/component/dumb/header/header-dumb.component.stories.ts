import type { Meta, StoryObj } from '@storybook/angular';

import { HeaderDumbComponent } from './header-dumb.component';

const meta: Meta<HeaderDumbComponent> = {
  title: 'Component/Dumb/Header',
  component: HeaderDumbComponent,
};

export default meta;
type Story = StoryObj<HeaderDumbComponent>;

export const Header1: Story = {
  args: {
    type: 'h1',
    content: 'Header 1',
    color: 'dominant',
  },
};

export const Header2: Story = {
  args: {
    type: 'h2',
    content: 'Header 2',
    color: 'dominant',
  },
};

export const Header3: Story = {
  args: {
    type: 'h3',
    content: 'Header 3',
    color: 'dominant',
  },
};

export const Header4: Story = {
  args: {
    type: 'h4',
    content: 'Header 4',
    color: 'dominant',
  },
};

export const Header5: Story = {
  args: {
    type: 'h5',
    content: 'Header 5',
    color: 'dominant',
  },
};

export const Dominant: Story = {
  args: {
    type: 'h1',
    content: 'Dominant',
    color: 'dominant',
  },
};

export const Complementary: Story = {
  args: {
    type: 'h1',
    content: 'Complementary',
    color: 'complementary',
  },
};

export const Accent: Story = {
  args: {
    type: 'h1',
    content: 'Accent',
    color: 'accent',
  },
};

// export const Success: Story = {
//   args: {
//     type: 'h1',
//     content: 'Success',
//     color: 'success',
//   },
// };
