import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SkillStateModel } from '../model/skill-state.model';

@State<SkillStateModel>({
  name: 'skill',
  defaults: {},
})
@Injectable()
export class SkillStoreState {
  @Selector()
  static getState(state: SkillStateModel) {
    return state;
  }
}
