import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ResumeStateModel } from '../model/resume-state.model';

@State<ResumeStateModel>({
  name: 'resume',
  defaults: {},
})
@Injectable()
export class ResumeStoreState {
  @Selector()
  static getState(state: ResumeStateModel) {
    return state;
  }
}
