import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { DataStateModel } from '../model/state/data-state.model';
import { DataStateInitAction } from '../action/state-init.action';

@State<DataStateModel>({
  name: 'data',
})
@Injectable({ providedIn: 'root' })
export class DataState {
  @Selector()
  static getState(state: DataStateModel) {
    return state;
  }

  @Action(DataStateInitAction)
  init(ctx: StateContext<DataStateModel>, action: DataStateInitAction) {
    ctx.patchState(action.state);
  }
}
