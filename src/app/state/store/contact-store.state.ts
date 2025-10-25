import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ContactStateModel } from '../model/contact-state.model';

@State<ContactStateModel>({
  name: 'contact',
  defaults: {},
})
@Injectable()
export class ContactStoreState {
  @Selector()
  static getState(state: ContactStateModel) {
    return state;
  }
}
