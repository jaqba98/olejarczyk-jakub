import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { DataStateModel } from '../model/state/data-state.model';
import { DataStateInitAction } from '../action/state-init.action';

@State<DataStateModel>({
  name: 'data',
})
@Injectable({ providedIn: 'root' })
export class DataState {
  @Action(DataStateInitAction)
  init(ctx: StateContext<DataStateModel>, action: DataStateInitAction) {
    ctx.patchState(action.state);
  }
}
