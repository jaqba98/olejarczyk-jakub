import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SkillStoreModel } from '../model/store/skill-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

@State<SkillStoreModel>({
  name: 'skill',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('skill'),
  },
})
@Injectable()
export class SkillStoreState {
  @Selector()
  static getState(state: SkillStoreModel) {
    return state;
  }
}
