import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStoreModel } from '../model/technology-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<TechnologyStoreModel>({
  name: 'technology',
  defaults: {
    sectionData: SectionDomainFinder.findByKind('technology'),
  },
})
@Injectable()
export class TechnologyStoreState {
  @Selector()
  static getState(state: TechnologyStoreModel) {
    return state;
  }
}
