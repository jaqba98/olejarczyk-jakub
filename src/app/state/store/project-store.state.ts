import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStateModel } from '../model/project-state.model';

@State<ProjectStateModel>({
  name: 'project',
  defaults: {},
})
@Injectable()
export class ProjectStoreState {
  @Selector()
  static getState(state: ProjectStateModel) {
    return state;
  }
}
