import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SkillStoreModel } from '../model/skill-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<SkillStoreModel>({
  name: 'skill',
  defaults: {
    sectionData: SectionDomainFinder.findDataByKind('skill'),
  },
})
@Injectable()
export class SkillStoreState {
  @Selector()
  static getState(state: SkillStoreModel) {
    return state;
  }
}
