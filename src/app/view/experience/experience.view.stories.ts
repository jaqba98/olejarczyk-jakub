import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { CompanyState } from '../../store/company/company.state';
import { ExperienceState } from '../../store/experience/experience.state';
import { TechnologyGroupState } from '../../store/technology-group/technology-group.state';
import { TechnologyState } from '../../store/technology/technology.state';
import { ExperienceView } from './experience.view';
import { TechnologyCategoryState } from '../../store/technology-category/technology-category.state';

const meta: Meta<ExperienceView> = {
  component: ExperienceView,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    applicationConfig({
      providers: [
        provideStore(
          [
            CompanyState,
            ExperienceState,
            TechnologyState,
            TechnologyGroupState,
            TechnologyCategoryState,
          ],
          withNgxsReduxDevtoolsPlugin(),
        ),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<ExperienceView>;

export const Primary: Story = {};
