import { Action, Selector, State, StateContext } from '@ngxs/store';

import { LayoutModel } from '../../layout/model/layout.model';
import { Injectable } from '@angular/core';
import { LayoutBuilder } from '../../layout/builder/layout.builder';
import { LayoutStoreInitAction } from '../action/layout-store.action';

@State<LayoutModel>({
  name: 'layout',
})
@Injectable()
export class LayoutStoreState {
  constructor(private readonly builder: LayoutBuilder) {}

  @Action(LayoutStoreInitAction)
  increment(ctx: StateContext<LayoutModel>) {
    const layout = this.builder.build();
    ctx.patchState(layout);
  }

  @Selector()
  static getState(state: LayoutModel) {
    return state;
  }
}
