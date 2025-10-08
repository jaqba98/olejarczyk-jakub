import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';
import { applicationConfig } from '@storybook/angular';

import { CompanyState } from '../store/company/company.state';
import { ExperienceState } from '../store/experience/experience.state';
import { TechnologyCategoryState } from '../store/technology-category/technology-category.state';
import { TechnologyGroupState } from '../store/technology-group/technology-group.state';
import { TechnologyState } from '../store/technology/technology.state';

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
