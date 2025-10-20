import { provideStore } from '@ngxs/store';
import { applicationConfig } from '@storybook/angular';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { CompanyState } from '../state/company/company.state';
import { ExperienceState } from '../state/experience/experience.state';
import { TechnologyState } from '../state/technology/technology.state';
import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
import { ProjectState } from '../state/project/project.state';
import { TechnologyGroupState } from '../state/technology-group/technology-group.state';

export class StoreUtil {
  static getProvide() {
    return [
      provideStore(
        [
          CompanyState,
          ExperienceState,
          ProjectState,
          TechnologyState,
          TechnologyCategoryState,
          TechnologyGroupState,
        ],
        withNgxsReduxDevtoolsPlugin(),
      ),
    ];
  }

  static getStorybookProvide() {
    return [
      applicationConfig({
        providers: [...StoreUtil.getProvide()],
      }),
    ];
  }
}
