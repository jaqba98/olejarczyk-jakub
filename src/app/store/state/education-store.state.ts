import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { EducationStoreModel } from '../model/store/education-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { EducationBuilder } from '../../builder/service/education.builder';

@State<EducationStoreModel>({
  name: 'education',
  defaults: {
    sectionBuilder: SectionBuilder.buildDataForKind('education'),
    educationBuilder: EducationBuilder.buildData(),
  },
})
@Injectable()
export class EducationStoreState {
  @Selector()
  static getState(state: EducationStoreModel) {
    return state;
  }
}
