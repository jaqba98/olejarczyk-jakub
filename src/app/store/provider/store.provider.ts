import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { ApplicationConfig } from '@angular/core';
import { applicationConfig } from '@storybook/angular';

import { NavStoreState } from '../state/nav-store.state';
import { HomeStoreState } from '../state/home-store.state';
import { TechnologyStoreState } from '../state/technology-store.state';
import { SkillStoreState } from '../state/skill-store.state';
import { ExperienceStoreState } from '../state/experience-store.state';
import { ResumeStoreState } from '../state/resume-store.state';
import { EducationStoreState } from '../state/education-store.state';
import { ProjectStoreState } from '../state/project-store.state';
import { ContactStoreState } from '../state/contact-store.state';
import { FooterStoreState } from '../state/footer-store.state';
import { AboutMeStoreState } from '../state/about-me-store.state';

export class StoreProvider {
  static getProvider() {
    return [
      provideStore(
        [
          NavStoreState,
          HomeStoreState,
          AboutMeStoreState,
          TechnologyStoreState,
          SkillStoreState,
          ExperienceStoreState,
          ResumeStoreState,
          EducationStoreState,
          ProjectStoreState,
          ContactStoreState,
          FooterStoreState,
        ],
        withNgxsReduxDevtoolsPlugin(),
      ),
    ];
  }

  static getStorybookProvider(providers: ApplicationConfig['providers'] = []) {
    return [
      applicationConfig({
        providers: [...StoreProvider.getProvider(), ...providers],
      }),
    ];
  }
}
