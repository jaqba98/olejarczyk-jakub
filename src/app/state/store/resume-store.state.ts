import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ResumeStateModel } from '../model/resume-state.model';
import { SectionDataFinder } from '../../finder/domain/section-domain.finder.ts';

@State<ResumeStateModel>({
  name: 'resume',
  defaults: {
    sectionData: SectionDataFinder.find('resume'),
  },
})
@Injectable()
export class ResumeStoreState {
  @Selector()
  static getState(state: ResumeStateModel) {
    return state;
  }
}
