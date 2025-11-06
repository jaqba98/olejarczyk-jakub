import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStoreModel } from '../model/store/technology-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { TechnologyBuilder } from '../../builder/service/technology.builder';

@State<TechnologyStoreModel>({
  name: 'technology',
  defaults: {
    sectionBuilder: SectionBuilder.buildDataForKind('technology'),
    technologyBuilder: TechnologyBuilder.buildData(),
  },
})
@Injectable()
export class TechnologyStoreState {
  @Selector()
  static getState(state: TechnologyStoreModel) {
    return state;
  }
}
