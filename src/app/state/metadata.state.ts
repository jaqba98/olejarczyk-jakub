import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { MetadataInitAction } from '../action/init.action';
import { MetadataStateModel } from '../model/state/metadata-state.model';

@State<MetadataStateModel>({
  name: 'metadata',
})
@Injectable({ providedIn: 'root' })
export class MetadataState {
  @Selector()
  static getState(state: MetadataStateModel) {
    return state;
  }

  @Action(MetadataInitAction)
  init(ctx: StateContext<MetadataStateModel>, action: MetadataInitAction) {
    ctx.patchState(action.state);
  }
}
