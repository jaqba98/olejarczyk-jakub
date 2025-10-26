import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStateModel } from '../model/experience-state.model';
import { SectionDataFinder } from '../../finder/domain/section-domain.finder.ts';

@State<ExperienceStateModel>({
  name: 'experience',
  defaults: {
    sectionData: SectionDataFinder.find('experience'),
  },
})
@Injectable()
export class ExperienceStoreState {
  @Selector()
  static getState(state: ExperienceStateModel) {
    return state;
  }
}
