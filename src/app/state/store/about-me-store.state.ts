import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { AboutMeStateModel } from '../model/about-me-state.model';
import { SectionDataFinder } from '../../finder/domain/section-domain.finder.ts';

@State<AboutMeStateModel>({
  name: 'aboutMe',
  defaults: {
    sectionData: SectionDataFinder.find('aboutMe'),
  },
})
@Injectable()
export class AboutMeStoreState {
  @Selector()
  static getState(state: AboutMeStateModel) {
    return state;
  }
}
