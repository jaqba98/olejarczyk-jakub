import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStateModel } from '../model/experience-state.model';

@State<ExperienceStateModel>({
  name: 'experience',
  defaults: {},
})
@Injectable()
export class ExperienceStoreState {
  @Selector()
  static getState(state: ExperienceStateModel) {
    return state;
  }
}
