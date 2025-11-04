import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { EducationStoreModel } from '../model/store/education-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { EducationDataBuilder } from '../../builder/data/education-data.builder';

@State<EducationStoreModel>({
  name: 'education',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('education'),
    educationData: EducationDataBuilder.buildData(),
  },
})
@Injectable()
export class EducationStoreState {
  @Selector()
  static getState(state: EducationStoreModel) {
    return state;
  }
}
