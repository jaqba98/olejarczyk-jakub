import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { applicationConfig } from '@storybook/angular';
import { RawState } from '../../state/raw.state';

export class StoreProvider {
  static getProvider() {
    return [provideStore([RawState], withNgxsReduxDevtoolsPlugin())];
  }

  static getStorybookProvider(providers: ApplicationConfig['providers'] = []) {
    return [
      applicationConfig({
        providers: [...StoreProvider.getProvider(), ...providers],
      }),
    ];
  }
}
