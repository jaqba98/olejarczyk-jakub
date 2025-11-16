import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { MetadataStateInitAction } from '../action/state-init.action';
import { MetadataStateModel } from '../model/state/metadata-state.model';

@State<MetadataStateModel>({
  name: 'metadata',
})
@Injectable({ providedIn: 'root' })
export class MetadataState {
  @Action(MetadataStateInitAction)
  init(ctx: StateContext<MetadataStateModel>, action: MetadataStateInitAction) {
    ctx.patchState(action.state);
  }
}
