import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStateModel } from '../model/technology-state.model';
import { SectionDataFinder } from '../../finder/data/section-data.finder';

@State<TechnologyStateModel>({
  name: 'technology',
  defaults: {
    sectionData: SectionDataFinder.find('technology'),
  },
})
@Injectable()
export class TechnologyStoreState {
  @Selector()
  static getState(state: TechnologyStateModel) {
    return state;
  }
}
