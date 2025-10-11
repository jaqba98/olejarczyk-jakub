import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyGroupStateModel } from './technology-group-state.model';

@State<TechnologyGroupStateModel>({
  name: 'technologyGroup',
  defaults: {
    frontend: {
      name: 'Frontend',
    },
    backend: {
      name: 'Backend',
    },
    devops: {
      name: 'DevOps',
    },
    integration: {
      name: 'Integration',
    },
    ai: {
      name: 'AI',
    },
    common: {
      name: 'Common',
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
