import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyGroupStateModel } from './technology-group-state.model';
import { TechnologyGroupConst } from './technology-group.const';

@State<TechnologyGroupStateModel>({
  name: 'technologyGroup',
  defaults: TechnologyGroupConst,
})
@Injectable()
export class TechnologyGroupState {
  @Selector()
  static getState(state: TechnologyGroupStateModel) {
    return state;
  }
}
