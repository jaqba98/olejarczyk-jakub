import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';

import { ExperienceView } from './experience.view';
import { CompanyState } from '../../store/company/company.state';

const meta: Meta<ExperienceView> = {
  component: ExperienceView,
  decorators: [
    applicationConfig({
      providers: [provideStore([CompanyState], withNgxsReduxDevtoolsPlugin())],
    }),
  ],
};

export default meta;
type Story = StoryObj<ExperienceView>;

export const Primary: Story = {};
