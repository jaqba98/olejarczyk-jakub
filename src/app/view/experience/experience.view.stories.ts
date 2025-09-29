import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';

import { ExperienceView } from './experience.view';
import { CompanyState } from '../../store/company/company.state';
import { CategoryState } from '../../store/category/category.state';
import { TechnologyState } from '../../store/technology/technology.state';
import { ExperienceState } from '../../store/experience/experience.state';
import { TechnologyGroupState } from '../../store/technology-group/technology-group.state';

const meta: Meta<ExperienceView> = {
  component: ExperienceView,
  decorators: [
    applicationConfig({
      providers: [
        provideStore(
          [CategoryState, CompanyState, TechnologyGroupState, ExperienceState, TechnologyState],
          withNgxsReduxDevtoolsPlugin(),
        ),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<ExperienceView>;

export const Primary: Story = {};
