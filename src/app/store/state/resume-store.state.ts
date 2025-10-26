import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ResumeStoreModel } from '../model/store/resume-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

@State<ResumeStoreModel>({
  name: 'resume',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('resume'),
  },
})
@Injectable()
export class ResumeStoreState {
  @Selector()
  static getState(state: ResumeStoreModel) {
    return state;
  }
}
