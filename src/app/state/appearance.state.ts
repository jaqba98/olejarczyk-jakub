import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AppearanceStateModel } from '../model/state/appearance-state.model';
import { AppearanceStateInitAction } from '../action/state-init.action';

@State<AppearanceStateModel>({
  name: 'appearance',
})
@Injectable({ providedIn: 'root' })
export class AppearanceState {
  @Selector()
  static getState(state: AppearanceStateModel) {
    return state;
  }

  @Action(AppearanceStateInitAction)
  init(ctx: StateContext<AppearanceStateModel>, action: AppearanceStateInitAction) {
    ctx.patchState(action.state);
  }
}
