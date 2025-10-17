import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';

import { TechnologyGroupStateModel } from './technology-group-state.model';

@State<TechnologyGroupStateModel>({
  name: 'technologyGroup',
  defaults: {
    frontend: {
      name: 'Frontend',
      order: 0,
    },
    backend: {
      name: 'Backend',
      order: 1,
    },
    devops: {
      name: 'DevOps',
      order: 2,
    },
    integration: {
      name: 'Integration',
      order: 3,
    },
    ai: {
      name: 'AI',
      order: 4,
    },
    common: {
      name: 'Common',
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
