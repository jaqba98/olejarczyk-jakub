import { Meta, StoryObj } from '@storybook/angular';

import { LogoDumbComponent } from './logo-dumb.component';

const meta: Meta<LogoDumbComponent> = {
  title: 'Component/Dumb/Logo',
  component: LogoDumbComponent,
};

export default meta;
type Story = StoryObj<LogoDumbComponent>;

export const Long: Story = {
  args: {
    title: 'Jakub Olejarczyk',
  },
};

export const Short: Story = {
  args: {
    title: 'JO',
  },
};
