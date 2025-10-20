import { Selector, State } from '@ngxs/store';

import { TechnologyGroupStateModel } from './technology-group-state.model';
import { Injectable } from '@angular/core';

@State<TechnologyGroupStateModel>({
  name: 'technologyGroup',
  defaults: {
    frontend: {
      order: 0,
    },
    backend: {
      order: 1,
    },
    devops: {
      order: 2,
    },
    integration: {
      order: 3,
    },
    ai: {
      order: 4,
    },
    common: {
      order: 5,
    },
  },
})
@Injectable()
export class TechnologyGroupState {
  @Selector()
  static getState(state: TechnologyGroupStateModel) {
    return state;
  }
}
