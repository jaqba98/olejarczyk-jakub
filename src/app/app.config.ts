import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { routes } from './app.routes';
import { CompanyState } from './store/company/company.state';
import { DomainState } from './store/domain/domain.state';
import { CategoryState } from './store/category/category.state';
import { TechnologyState } from './store/technology/technology.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(
      [CategoryState, CompanyState, DomainState, TechnologyState],
      withNgxsReduxDevtoolsPlugin(),
    ),
  ],
};
