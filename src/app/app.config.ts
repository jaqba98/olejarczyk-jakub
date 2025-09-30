import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';

import { routes } from './app.routes';
import { CompanyState } from './store/company/company.state';
import { ExperienceState } from './store/experience/experience.state';
import { TechnologyGroupState } from './store/technology-group/technology-group.state';
import { TechnologyState } from './store/technology/technology.state';
import { TechnologyCategoryState } from './store/technology-category/technology-category.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(
      [
        TechnologyCategoryState,
        CompanyState,
        TechnologyGroupState,
        ExperienceState,
        TechnologyState,
      ],
      withNgxsReduxDevtoolsPlugin(),
    ),
  ],
};
