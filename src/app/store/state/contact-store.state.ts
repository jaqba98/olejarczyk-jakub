import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ContactStoreModel } from '../model/contact-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<ContactStoreModel>({
  name: 'contact',
  defaults: {
    sectionData: SectionDomainFinder.findDataByKind('contact'),
  },
})
@Injectable()
export class ContactStoreState {
  @Selector()
  static getState(state: ContactStoreModel) {
    return state;
  }
}
