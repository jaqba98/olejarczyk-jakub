import type { Meta, StoryObj } from '@storybook/angular';

import { GeneratorComponent } from './generator.component';

const meta: Meta<GeneratorComponent> = {
  title: 'generator',
  component: GeneratorComponent,
};

export default meta;
type Story = StoryObj<GeneratorComponent>;

export const Default: Story = {};
