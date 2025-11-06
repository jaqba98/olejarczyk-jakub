import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SkillStoreModel } from '../model/store/skill-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { SkillBuilder } from '../../builder/service/skill.builder';

@State<SkillStoreModel>({
  name: 'skill',
  defaults: {
    sectionBuilder: SectionBuilder.buildDataForKind('skill'),
    skillBuilder: SkillBuilder.buildData(),
  },
})
@Injectable()
export class SkillStoreState {
  @Selector()
  static getState(state: SkillStoreModel) {
    return state;
  }
}
