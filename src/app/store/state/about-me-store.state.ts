import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { AboutMeStoreModel } from '../model/store/about-me-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

@State<AboutMeStoreModel>({
  name: 'aboutMe',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('aboutMe'),
  },
})
@Injectable()
export class AboutMeStoreState {
  @Selector()
  static getState(state: AboutMeStoreModel) {
    return state;
  }
}
