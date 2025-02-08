import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { HamburgerState } from './state/hamburger.state';

export const storeConfig: ApplicationConfig = {
  providers: [provideStore([HamburgerState]), withNgxsReduxDevtoolsPlugin()],
};
