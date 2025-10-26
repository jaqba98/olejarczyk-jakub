import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NavStoreModel } from '../model/nav-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<NavStoreModel>({
  name: 'nav',
  defaults: {
    sectionData: SectionDomainFinder.findByKind('nav'),
  },
})
@Injectable()
export class NavStoreState {
  @Selector()
  static getState(state: NavStoreModel) {
    return state;
  }
}
