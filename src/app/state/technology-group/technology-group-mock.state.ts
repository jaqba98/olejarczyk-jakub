import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyGroupStateModel } from './technology-group-state.model';
import { TechnologyGroupDomainMockType } from '../../domain/type/technology-group-domain.type';

@State<TechnologyGroupStateModel<TechnologyGroupDomainMockType>>({
  name: 'technologyGroupMock',
  defaults: {
    group1: {
      order: 0,
    },
    group2: {
      order: 1,
    },
    group3: {
      order: 2,
    },
  },
})
@Injectable()
export class TechnologyGroupMockState {
  @Selector()
  static getState(state: TechnologyGroupStateModel<TechnologyGroupDomainMockType>) {
    return state;
  }
}
