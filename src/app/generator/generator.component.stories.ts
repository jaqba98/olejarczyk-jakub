import type { Meta, StoryObj } from '@storybook/angular';

import { GeneratorComponent } from './generator.component';
import { StoreProvider } from '../store/provider/store.provider';

const meta: Meta<GeneratorComponent> = {
  title: 'generator',
  component: GeneratorComponent,
  decorators: StoreProvider.getStorybookProvider(),
};

export default meta;
type Story = StoryObj<GeneratorComponent>;

export const Default: Story = {};
