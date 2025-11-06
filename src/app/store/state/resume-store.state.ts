import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ResumeStoreModel } from '../model/store/resume-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { ResumeBuilder } from '../../builder/service/resume.builder';

@State<ResumeStoreModel>({
  name: 'resume',
  defaults: {
    ownSection: SectionBuilder.buildDataForKind('resume'),
    resume: ResumeBuilder.buildData(),
  },
})
@Injectable()
export class ResumeStoreState {
  @Selector()
  static getState(state: ResumeStoreModel) {
    return state;
  }
}
