import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStoreModel } from '../model/store/experience-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

@State<ExperienceStoreModel>({
  name: 'experience',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('experience'),
  },
})
@Injectable()
export class ExperienceStoreState {
  @Selector()
  static getState(state: ExperienceStoreModel) {
    return state;
  }
}
