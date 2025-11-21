import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { DomainStateModel } from '../model/state/domain-state.model';
import { DomainInitAction } from '../action/init.action';

@State<DomainStateModel>({
  name: 'domain',
})
@Injectable({ providedIn: 'root' })
export class DomainState {
  @Selector()
  static getState(state: DomainStateModel) {
    return state;
  }

  @Action(DomainInitAction)
  init(ctx: StateContext<DomainStateModel>, action: DomainInitAction) {
    ctx.patchState(action.state);
  }
}
