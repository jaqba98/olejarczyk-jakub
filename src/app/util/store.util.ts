import { provideStore } from '@ngxs/store';
import { applicationConfig } from '@storybook/angular';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { CompanyState } from '../state/company/company.state';
import { ExperienceState } from '../state/experience/experience.state';
import { TechnologyState } from '../state/technology/technology.state';
import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
import { ProjectState } from '../state/project/project.state';

export class StoreUtil {
  static getProvide() {
    return [
      provideStore(
        [CompanyState, ExperienceState, TechnologyState, TechnologyCategoryState, ProjectState],
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
