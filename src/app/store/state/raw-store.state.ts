import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { InitRawStoreAction } from '../action/init-store.action';
import { RawStoreModel } from '../model/raw-store.model';

@State<RawStoreModel>({
  name: 'raw',
})
@Injectable()
export class RawStoreState {
  @Action(InitRawStoreAction)
  init(ctx: StateContext<RawStoreModel>) {
    ctx.patchState({ test: 'Test' });
  }
}
