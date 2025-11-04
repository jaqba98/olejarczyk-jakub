import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SkillStoreModel } from '../model/store/skill-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { SkillDataBuilder } from '../../builder/data/skill-data.builder';

@State<SkillStoreModel>({
  name: 'skill',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('skill'),
    skillData: SkillDataBuilder.buildData(),
  },
})
@Injectable()
export class SkillStoreState {
  @Selector()
  static getState(state: SkillStoreModel) {
    return state;
  }
}
