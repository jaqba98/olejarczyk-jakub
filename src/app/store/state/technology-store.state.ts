import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStoreModel } from '../model/store/technology-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

@State<TechnologyStoreModel>({
  name: 'technology',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('technology'),
  },
})
@Injectable()
export class TechnologyStoreState {
  @Selector()
  static getState(state: TechnologyStoreModel) {
    return state;
  }
}
