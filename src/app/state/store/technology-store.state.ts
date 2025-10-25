import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStateModel } from '../model/technology-state.model';

@State<TechnologyStateModel>({
  name: 'technology',
  defaults: {},
})
@Injectable()
export class TechnologyStoreState {
  @Selector()
  static getState(state: TechnologyStateModel) {
    return state;
  }
}
