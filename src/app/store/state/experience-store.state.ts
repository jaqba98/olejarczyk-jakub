import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStoreModel } from '../model/experience-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<ExperienceStoreModel>({
  name: 'experience',
  defaults: {
    sectionData: SectionDomainFinder.findDataByKind('experience'),
  },
})
@Injectable()
export class ExperienceStoreState {
  @Selector()
  static getState(state: ExperienceStoreModel) {
    return state;
  }
}
