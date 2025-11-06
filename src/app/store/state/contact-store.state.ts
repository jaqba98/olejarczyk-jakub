import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ContactStoreModel } from '../model/store/contact-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { PersonalBuilder } from '../../builder/service/personal.builder';
import { SocialMediaBuilder } from '../../builder/service/social-media.builder';

@State<ContactStoreModel>({
  name: 'contact',
  defaults: {
    sectionBuilder: SectionBuilder.buildDataForKind('contact'),
    personalBuilder: PersonalBuilder.buildData(),
    socialMediaBuilder: SocialMediaBuilder.buildData(),
  },
})
@Injectable()
export class ContactStoreState {
  @Selector()
  static getState(state: ContactStoreModel) {
    return state;
  }
}
