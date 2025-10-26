import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { NavStoreModel } from '../model/store/nav-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { PersonalDataBuilder } from '../../builder/data/personal-data.builder';

@State<NavStoreModel>({
  name: 'nav',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('nav'),
    personalData: PersonalDataBuilder.buildData(),
  },
})
@Injectable()
export class NavStoreState {
  @Selector()
  static getState(state: NavStoreModel) {
    return state;
  }
}
