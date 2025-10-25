import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStateModel } from '../model/project-state.model';
import { SectionDataFinder } from '../../finder/data/section-data.finder';

@State<ProjectStateModel>({
  name: 'project',
  defaults: {
    sectionData: SectionDataFinder.find('project'),
  },
})
@Injectable()
export class ProjectStoreState {
  @Selector()
  static getState(state: ProjectStateModel) {
    return state;
  }
}
