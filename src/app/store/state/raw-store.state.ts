import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { InitRawStoreAction } from '../action/init-store.action';
import { RawStoreModel } from '../../model/state/raw-state.model';

@State<RawStoreModel>({
  name: 'raw',
})
@Injectable()
export class RawStoreState {
  @Action(InitRawStoreAction)
  init(ctx: StateContext<RawStoreModel>, action: InitRawStoreAction) {
    ctx.patchState(action.model);
  }
}
