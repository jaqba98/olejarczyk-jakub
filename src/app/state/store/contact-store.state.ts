import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ContactStateModel } from '../model/contact-state.model';
import { SectionDataFinder } from '../../finder/domain/section-domain.finder.ts';

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
