import { Meta, StoryObj } from '@storybook/angular';

import { HtmlComponent } from './html.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<HtmlComponent> = {
  title: 'Component/Language/Html',
  component: HtmlComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<HtmlComponent>;

export const Default: Story = {};
