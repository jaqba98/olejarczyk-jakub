import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

import { MenuState } from './state/menu.state';
import { SystemState } from './state/system.state';
import { SkillsState } from './state/skills.state';

export const storeConfig: ApplicationConfig = {
  providers: [
    provideStore([MenuState, SystemState, SkillsState]),
    withNgxsReduxDevtoolsPlugin(),
  ],
};
