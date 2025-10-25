import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { EducationStateModel } from '../model/education-state.model';
import { SectionDataFinder } from '../../finder/data/section-data.finder';

@State<EducationStateModel>({
  name: 'education',
  defaults: {
    sectionData: SectionDataFinder.find('education'),
  },
})
@Injectable()
export class EducationStoreState {
  @Selector()
  static getState(state: EducationStateModel) {
    return state;
  }
}
