import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { MenuState } from './state/menu.state';

export const storeConfig: ApplicationConfig = {
  providers: [provideStore([MenuState]), withNgxsReduxDevtoolsPlugin()],
};
