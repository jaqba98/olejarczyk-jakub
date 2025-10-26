import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ResumeStoreModel } from '../model/resume-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<ResumeStoreModel>({
  name: 'resume',
  defaults: {
    sectionData: SectionDomainFinder.findByKind('resume'),
  },
})
@Injectable()
export class ResumeStoreState {
  @Selector()
  static getState(state: ResumeStoreModel) {
    return state;
  }
}
