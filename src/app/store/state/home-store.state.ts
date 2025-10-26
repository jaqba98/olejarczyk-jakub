import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { HomeStoreModel } from '../model/store/home-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { PersonalDataBuilder } from '../../builder/data/personal-data.builder';

@State<HomeStoreModel>({
  name: 'home',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('home'),
    personalData: PersonalDataBuilder.buildData(),
  },
})
@Injectable()
export class HomeStoreState {
  @Selector()
  static getState(state: HomeStoreModel) {
    return state;
  }
}
