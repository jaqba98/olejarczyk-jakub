import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { MapperStateModel } from '../model/state/mapper-state.model';
import { MapperStateInitAction } from '../action/state-init.action';

@State<MapperStateModel>({
  name: 'mapper',
})
@Injectable({ providedIn: 'root' })
export class MapperState {
  @Selector()
  static getState(state: MapperStateModel) {
    return state;
  }

  @Action(MapperStateInitAction)
  init(ctx: StateContext<MapperStateModel>, action: MapperStateInitAction) {
    ctx.patchState(action.state);
  }
}
