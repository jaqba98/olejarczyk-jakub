import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { AboutMeStateModel } from '../model/about-me-state.model';

@State<AboutMeStateModel>({
  name: 'aboutMe',
  defaults: {},
})
@Injectable()
export class AboutMeStoreState {
  @Selector()
  static getState(state: AboutMeStateModel) {
    return state;
  }
}
