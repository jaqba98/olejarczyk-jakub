import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStateModel } from '../../domain/model/state/technology-state-domain.model';
import { TechnologyConst } from './technology.const';

@State<TechnologyStateModel>({
  name: 'technology',
  defaults: TechnologyConst,
})
@Injectable()
export class TechnologyState {
  @Selector()
  static getState(state: TechnologyStateModel) {
    return state;
  }
}
