import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { NavStateModel } from '../model/nav-state.model';

@State<NavStateModel>({
  name: 'nav',
  defaults: {},
})
@Injectable()
export class NavStoreState {
  @Selector()
  static getState(state: NavStateModel) {
    return state;
  }
}
