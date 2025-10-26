import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { AboutMeStoreModel } from '../model/about-me-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<AboutMeStoreModel>({
  name: 'aboutMe',
  defaults: {
    sectionData: SectionDomainFinder.findByKind('aboutMe'),
  },
})
@Injectable()
export class AboutMeStateStore {
  @Selector()
  static getState(state: AboutMeStoreModel) {
    return state;
  }
}
