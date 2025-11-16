import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { applicationConfig } from '@storybook/angular';
import { RawState } from '../../state/raw.state';
import { MapperState } from '../../state/mapper.state';

export class StoreProvider {
  static getProvider() {
    return [provideStore([RawState, MapperState], withNgxsReduxDevtoolsPlugin())];
  }

  static getStorybookProvider(providers: ApplicationConfig['providers'] = []) {
    return [
      applicationConfig({
        providers: [...StoreProvider.getProvider(), ...providers],
      }),
    ];
  }
}
