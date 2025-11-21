import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { DataStateModel } from '../model/state/data-state.model';
import { DataInitAction } from '../action/init.action';

@State<DataStateModel>({
  name: 'data',
})
@Injectable({ providedIn: 'root' })
export class DataState {
  @Selector()
  static getState(state: DataStateModel) {
    return state;
  }

  @Action(DataInitAction)
  init(ctx: StateContext<DataStateModel>, action: DataInitAction) {
    ctx.patchState(action.state);
  }
}
