import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';
import { applicationConfig } from '@storybook/angular';

import { CompanyState } from '../state/company/company.state';
import { ExperienceState } from '../state/experience/experience.state';
import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
import { TechnologyGroupState } from '../state/technology-group/technology-group.state';
import { TechnologyState } from '../state/technology/technology.state';

export class StoreUtil {
  static getProvide() {
    return [
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
