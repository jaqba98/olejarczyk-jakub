import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { applicationConfig } from '@storybook/angular';

import { CompanyDomainState } from '../state/company-domain.state';
import { ExperienceDomainState } from '../state/experience-domain.state';
import { ProjectDomainState } from '../state/project-domain.state';
import { TechnologyCategoryDomainState } from '../state/technology-category-domain.state';
import { TechnologyDomainState } from '../state/technology-domain.state';
import { TechnologyGroupDomainState } from '../state/technology-group-domain.state';
import { ApplicationConfig } from '@angular/core';
import { MainNavDomainState } from '../state/main-nav-domain.state';
import { HomeDomainBuilder } from '../builder/home-domain.builder';
import { HomeDomainState } from '../state/home-domain.state';

export class StoreDomainProvider {
  static getProvide() {
    return [
      provideStore(
        [
          MainNavDomainState,
          HomeDomainState,
          CompanyDomainState,
          ExperienceDomainState,
          ProjectDomainState,
          TechnologyCategoryDomainState,
          TechnologyDomainState,
          TechnologyGroupDomainState,
        ],
        withNgxsReduxDevtoolsPlugin(),
      ),
    ];
  }

  static getProvideForStorybook(providers: ApplicationConfig['providers'] = []) {
    return [
      applicationConfig({
        providers: [...StoreDomainProvider.getProvide(), ...providers],
      }),
    ];
  }
}
