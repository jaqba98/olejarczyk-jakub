import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStateModel } from './experience-state.model';
import { ExperienceConst } from './experience.const';

@State<ExperienceStateModel>({
  name: 'experience',
  defaults: ExperienceConst,
})
@Injectable()
export class ExperienceState {
  @Selector()
  static getState(state: ExperienceStateModel) {
    return state;
  }
}
