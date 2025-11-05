import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ResumeStoreModel } from '../model/store/resume-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { ResumeDataBuilder } from '../../builder/data/resume-data.builder';

@State<ResumeStoreModel>({
  name: 'resume',
  defaults: {
    ownSection: SectionDataBuilder.buildDataForKind('resume'),
    resumeData: ResumeDataBuilder.buildData(),
  },
})
@Injectable()
export class ResumeStoreState {
  @Selector()
  static getState(state: ResumeStoreModel) {
    return state;
  }
}
