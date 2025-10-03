import { provideStore } from '@ngxs/store';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { ExperienceViewComponent } from './experience-view.component';
import { CompanyState } from '../../../store/company/company.state';
import { ExperienceState } from '../../../store/experience/experience.state';
import { TechnologyCategoryState } from '../../../store/technology-category/technology-category.state';
import { TechnologyGroupState } from '../../../store/technology-group/technology-group.state';
import { TechnologyState } from '../../../store/technology/technology.state';

const meta: Meta<ExperienceViewComponent> = {
  title: 'Component/View/Experience',
  component: ExperienceViewComponent,
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
type Story = StoryObj<ExperienceViewComponent>;

export const Primary: Story = {};
