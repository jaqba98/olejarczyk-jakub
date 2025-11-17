import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { DomainStateModel } from '../model/state/domain-state.model';
import { DomainStateInitAction } from '../action/state-init.action';

@State<DomainStateModel>({
  name: 'domain',
})
@Injectable({ providedIn: 'root' })
export class DomainState {
  @Selector()
  static getState(state: DomainStateModel) {
    return state;
  }

  @Action(DomainStateInitAction)
  init(ctx: StateContext<DomainStateModel>, action: DomainStateInitAction) {
    ctx.patchState(action.state);
  }
}
