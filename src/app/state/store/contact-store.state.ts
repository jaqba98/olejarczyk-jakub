import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ContactStateModel } from '../model/contact-state.model';
import { SectionDataFinder } from '../../finder/data/section-data.finder';

@State<ContactStateModel>({
  name: 'contact',
  defaults: {
    sectionData: SectionDataFinder.find('contact'),
  },
})
@Injectable()
export class ContactStoreState {
  @Selector()
  static getState(state: ContactStateModel) {
    return state;
  }
}
