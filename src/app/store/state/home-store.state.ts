import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { HomeStoreModel } from '../model/home-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<HomeStoreModel>({
  name: 'home',
  defaults: {
    sectionData: SectionDomainFinder.findByKind('home'),
  },
})
@Injectable()
export class HomeStoreState {
  @Selector()
  static getState(state: HomeStoreModel) {
    return state;
  }
}
