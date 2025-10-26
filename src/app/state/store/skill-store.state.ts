import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SkillStateModel } from '../model/skill-state.model';
import { SectionDataFinder } from '../../finder/domain/section-domain.finder.ts';

@State<SkillStateModel>({
  name: 'skill',
  defaults: {
    sectionData: SectionDataFinder.find('skill'),
  },
})
@Injectable()
export class SkillStoreState {
  @Selector()
  static getState(state: SkillStateModel) {
    return state;
  }
}
