import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { applicationConfig } from '@storybook/angular';
import { ApplicationConfig } from '@angular/core';

import { CompanyDomainState } from '../state/company-domain.state';
import { ExperienceDomainState } from '../state/experience-domain.state';
import { ProjectDomainState } from '../state/project-domain.state';
import { TechnologyCategoryDomainState } from '../state/technology-category-domain.state';
import { TechnologyDomainState } from '../state/technology-domain.state';
import { TechnologyGroupDomainState } from '../state/technology-group-domain.state';
import { PersonalDataDomainState } from '../state/data/personal-data-domain.state';
import { NavSectionDomainState } from '../state/section/nav-section-domain.state';
import { SectionDataDomainState } from '../state/data/section-data-domain.state';
import { HomeSectionDomainState } from '../state/section/home-section-domain.state';
import { SocialMediaDataDomainState } from '../state/data/social-media-data-domain.state';
import { AboutMeSectionDomainState } from '../state/section/about-me-section-domain.state';

export class StoreDomainProvider {
  static getProvide() {
    return [
      provideStore(
        [
          ...StoreDomainProvider.getDataDomainState(),
          ...StoreDomainProvider.getSectionDomainState(),
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

  static getDataDomainState() {
    return [PersonalDataDomainState, SectionDataDomainState, SocialMediaDataDomainState];
  }

  static getSectionDomainState() {
    return [
      NavSectionDomainState,
      HomeSectionDomainState,
      AboutMeSectionDomainState,
      CompanyDomainState,
      ExperienceDomainState,
      ProjectDomainState,
      TechnologyCategoryDomainState,
      TechnologyDomainState,
      TechnologyGroupDomainState,
    ];
  }
}
