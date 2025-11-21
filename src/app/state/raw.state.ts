import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { RawStateModel } from '../model/state/raw-state.model';
import { RawInitAction } from '../action/init.action';

@State<RawStateModel>({
  name: 'raw',
})
@Injectable({ providedIn: 'root' })
export class RawState {
  @Selector()
  static getState(state: RawStateModel) {
    return state;
  }

  @Action(RawInitAction)
  init(ctx: StateContext<RawStateModel>, action: RawInitAction) {
    ctx.patchState(action.state);
  }
}
