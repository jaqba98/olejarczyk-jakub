import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyGroupStateModel } from '../../domain/model/state/technology-group-state-domain.model';
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
