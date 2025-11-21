import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { MapperStateModel } from '../model/state/mapper-state.model';
import { MapperInitAction } from '../action/init.action';

@State<MapperStateModel>({
  name: 'mapper',
})
@Injectable({ providedIn: 'root' })
export class MapperState {
  @Selector()
  static getState(state: MapperStateModel) {
    return state;
  }

  @Action(MapperInitAction)
  init(ctx: StateContext<MapperStateModel>, action: MapperInitAction) {
    ctx.patchState(action.state);
  }
}
