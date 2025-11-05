import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStoreModel } from '../model/store/technology-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { TechnologyDataBuilder } from '../../builder/data/technology-data.builder';

@State<TechnologyStoreModel>({
  name: 'technology',
  defaults: {
    ownSection: SectionDataBuilder.buildDataForKind('technology'),
    technologyData: TechnologyDataBuilder.buildData(),
  },
})
@Injectable()
export class TechnologyStoreState {
  @Selector()
  static getState(state: TechnologyStoreModel) {
    return state;
  }
}
