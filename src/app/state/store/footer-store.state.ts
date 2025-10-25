import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { FooterStateModel } from '../model/footer-state.model';

@State<FooterStateModel>({
  name: 'footer',
  defaults: {},
})
@Injectable()
export class FooterStoreState {
  @Selector()
  static getState(state: FooterStateModel) {
    return state;
  }
}
