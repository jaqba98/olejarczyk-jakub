import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { HomeStoreModel } from '../model/store/home-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { PersonalDataBuilder } from '../../builder/data/personal-data.builder';
import { SocialMediaDataBuilder } from '../../builder/data/social-media-data.builder';
import { HomeDataBuilder } from '../../builder/data/home-data.builder';

@State<HomeStoreModel>({
  name: 'home',
  defaults: {
    ownSection: SectionDataBuilder.buildDataForKind('home'),
    personalData: PersonalDataBuilder.buildData(),
    socialMediaDatas: SocialMediaDataBuilder.buildData(),
    homeData: HomeDataBuilder.buildData(),
  },
})
@Injectable()
export class HomeStoreState {
  @Selector()
  static getState(state: HomeStoreModel) {
    return state;
  }
}
