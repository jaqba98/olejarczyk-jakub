import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { NavStateModel } from '../model/nav-state.model';
import { SectionDataFinder } from '../../finder/data/section-data.finder';
import { PersonalDataFinder } from '../../finder/data/personal-data.finder';

@State<NavStateModel>({
  name: 'nav',
  defaults: {
    sectionData: SectionDataFinder.find('nav'),
    personalData: PersonalDataFinder.find(),
    sectionDatas: SectionDataFinder.findNavigable(),
  },
})
@Injectable()
export class NavStoreState {
  @Selector()
  static getState(state: NavStateModel) {
    return state;
  }
}
