import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { RawStateModel } from '../model/state/raw-state.model';
import { RawStateInitAction } from '../action/state-init.action';

@State<RawStateModel>({
  name: 'raw',
})
@Injectable({ providedIn: 'root' })
export class RawState {
  @Selector()
  static getState(state: RawStateModel) {
    return state;
  }

  @Action(RawStateInitAction)
  init(ctx: StateContext<RawStateModel>, action: RawStateInitAction) {
    ctx.patchState(action.state);
  }
}
