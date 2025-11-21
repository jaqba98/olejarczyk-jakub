import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AppearanceStateModel } from '../model/state/appearance-state.model';
import { AppearanceInitAction } from '../action/init.action';

@State<AppearanceStateModel>({
  name: 'appearance',
})
@Injectable({ providedIn: 'root' })
export class AppearanceState {
  @Selector()
  static getState(state: AppearanceStateModel) {
    return state;
  }

  @Action(AppearanceInitAction)
  init(ctx: StateContext<AppearanceStateModel>, action: AppearanceInitAction) {
    ctx.patchState(action.state);
  }
}
