import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { EducationStateModel } from '../model/education-state.model';

@State<EducationStateModel>({
  name: 'education',
  defaults: {},
})
@Injectable()
export class EducationStoreState {
  @Selector()
  static getState(state: EducationStateModel) {
    return state;
  }
}
