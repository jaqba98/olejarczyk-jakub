import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { ApplicationConfig } from '@angular/core';
import { applicationConfig } from '@storybook/angular';

import { SectionStoreState } from '../state/section-store.state';

export class StoreProvider {
  static getProvider() {
    return [provideStore([SectionStoreState], withNgxsReduxDevtoolsPlugin())];
  }

  static getStorybookProvider(providers: ApplicationConfig['providers'] = []) {
    return [
      applicationConfig({
        providers: [...StoreProvider.getProvider(), ...providers],
      }),
    ];
  }
}
