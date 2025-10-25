import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { HomeStateModel } from '../model/home-state.model';

@State<HomeStateModel>({
  name: 'home',
  defaults: {},
})
@Injectable()
export class HomeStoreState {
  @Selector()
  static getState(state: HomeStateModel) {
    return state;
  }
}
