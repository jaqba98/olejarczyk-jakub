import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStoreModel } from '../model/store/project-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { ProjectBuilder } from '../../builder/service/project.builder';

@State<ProjectStoreModel>({
  name: 'project',
  defaults: {
    ownSection: SectionBuilder.buildDataForKind('project'),
    project: ProjectBuilder.buildData(),
  },
})
@Injectable()
export class ProjectStoreState {
  @Selector()
  static getState(state: ProjectStoreModel) {
    return state;
  }
}
