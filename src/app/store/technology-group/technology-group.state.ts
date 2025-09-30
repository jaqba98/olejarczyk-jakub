import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

import { TechnologyGroupStateModel } from './technology-group.state.model';

@State<TechnologyGroupStateModel>({
  name: 'technologyGroup',
  defaults: {
    frontend: {
      label: 'Frontend',
    },
    backend: {
      label: 'Backend',
    },
    devops: {
      label: 'DevOps',
    },
    integration: {
      label: 'Integration',
    },
    common: {
      label: 'Common',
    },
  },
})
@Injectable()
export class TechnologyGroupState {
  @Selector()
  static getTechnologyGroups(state: TechnologyGroupStateModel) {
    return state;
  }
}
