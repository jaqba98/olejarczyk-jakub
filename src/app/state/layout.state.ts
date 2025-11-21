import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { LayoutStateModel } from '../model/state/layout-state.model';
import { LayoutInitAction } from '../action/init.action';

@State<LayoutStateModel>({
  name: 'layout',
})
@Injectable({ providedIn: 'root' })
export class LayoutState {
  @Selector()
  static getState(state: LayoutStateModel) {
    return state;
  }

  @Action(LayoutInitAction)
  init(ctx: StateContext<LayoutStateModel>, action: LayoutInitAction) {
    ctx.patchState(action.state);
  }
}
