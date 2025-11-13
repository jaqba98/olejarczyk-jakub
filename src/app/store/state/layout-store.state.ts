import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

import { LayoutModel } from '../../layout/model/layout.model';
import { LayoutBuilder } from '../../layout/builder/layout.builder';

@State<LayoutModel>({
  name: 'layout',
  defaults: LayoutBuilder.build(),
})
@Injectable()
export class LayoutStoreState {
  @Selector()
  static getState(state: LayoutModel) {
    return state;
  }
}
