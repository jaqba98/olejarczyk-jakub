import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { LayoutStateModel } from '../model/state/layout-state.model';
import { LayoutStateInitAction } from '../action/state-init.action';

@State<LayoutStateModel>({
  name: 'layout',
})
@Injectable({ providedIn: 'root' })
export class LayoutState {
  @Selector()
  static getState(state: LayoutStateModel) {
    return state;
  }

  @Action(LayoutStateInitAction)
  init(ctx: StateContext<LayoutStateModel>, action: LayoutStateInitAction) {
    ctx.patchState(action.state);
  }
}
