import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { NavStoreModel } from '../model/store/nav-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { PersonalBuilder } from '../../builder/service/personal.builder';

@State<NavStoreModel>({
  name: 'nav',
  defaults: {
    ownSection: SectionBuilder.buildDataForKind('nav'),
    personal: PersonalBuilder.buildData(),
    sections: SectionBuilder.buildDataForRoutableSections(),
  },
})
@Injectable()
export class NavStoreState {
  @Selector()
  static getState(state: NavStoreModel) {
    return state;
  }
}
