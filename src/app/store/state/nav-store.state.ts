import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { NavStoreModel } from '../model/nav-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { PersonalDomainFinder } from '../../finder/domain/personal-domain.finder';

@State<NavStoreModel>({
  name: 'nav',
  defaults: {
    sectionData: SectionDomainFinder.findDataByKind('nav'),
    personalData: PersonalDomainFinder.findData(),
  },
})
@Injectable()
export class NavStoreState {
  @Selector()
  static getState(state: NavStoreModel) {
    return state;
  }
}
