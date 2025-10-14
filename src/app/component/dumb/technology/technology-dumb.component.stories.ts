import type { Meta, StoryObj } from '@storybook/angular';

import { TechnologyDumbComponent } from './technology-dumb.component';
import { SvgConst } from '../../../const/svg.const';

const meta: Meta<TechnologyDumbComponent> = {
  title: 'component/dumb/technology',
  component: TechnologyDumbComponent,
};

export default meta;
type Story = StoryObj<TechnologyDumbComponent>;

export const Primary: Story = {
  args: {
    value: 'Visual Studio Code',
    svg: SvgConst.visualStudioCode,
  },
};
