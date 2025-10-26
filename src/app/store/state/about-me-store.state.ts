import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { AboutMeStoreModel } from '../model/about-me-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<AboutMeStoreModel>({
  name: 'aboutMe',
  defaults: {
    sectionData: SectionDomainFinder.findDataByKind('aboutMe'),
  },
})
@Injectable()
export class AboutMeStoreState {
  @Selector()
  static getState(state: AboutMeStoreModel) {
    return state;
  }
}
