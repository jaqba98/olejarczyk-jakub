import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { App } from './app';
import { CompanyState } from './store/company/company.state';
import { ExperienceState } from './store/experience/experience.state';
import { TechnologyCategoryState } from './store/technology-category/technology-category.state';
import { TechnologyGroupState } from './store/technology-group/technology-group.state';
import { TechnologyState } from './store/technology/technology.state';

const meta: Meta<App> = {
  title: 'App',
  component: App,
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
type Story = StoryObj<App>;

export const Default: Story = {};
