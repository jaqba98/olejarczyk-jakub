import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ContactStoreModel } from '../model/store/contact-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { PersonalDataBuilder } from '../../builder/data/personal-data.builder';
import { SocialMediaDataBuilder } from '../../builder/data/social-media-data.builder';

@State<ContactStoreModel>({
  name: 'contact',
  defaults: {
    ownSection: SectionDataBuilder.buildDataForKind('contact'),
    personalData: PersonalDataBuilder.buildData(),
    socialMediaData: SocialMediaDataBuilder.buildData(),
  },
})
@Injectable()
export class ContactStoreState {
  @Selector()
  static getState(state: ContactStoreModel) {
    return state;
  }
}
