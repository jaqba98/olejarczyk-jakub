import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { HomeStateModel } from '../model/home-state.model';
import { SectionDataFinder } from '../../finder/domain/section-domain.finder.ts';

@State<HomeStateModel>({
  name: 'home',
  defaults: {
    sectionData: SectionDataFinder.find('home'),
  },
})
@Injectable()
export class HomeStoreState {
  @Selector()
  static getState(state: HomeStateModel) {
    return state;
  }
}
