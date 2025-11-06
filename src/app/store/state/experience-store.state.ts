import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStoreModel } from '../model/store/experience-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { ExperienceBuilder } from '../../builder/service/experience.builder';

@State<ExperienceStoreModel>({
  name: 'experience',
  defaults: {
    ownSection: SectionBuilder.buildDataForKind('experience'),
    experience: ExperienceBuilder.buildData(),
  },
})
@Injectable()
export class ExperienceStoreState {
  @Selector()
  static getState(state: ExperienceStoreModel) {
    return state;
  }
}
