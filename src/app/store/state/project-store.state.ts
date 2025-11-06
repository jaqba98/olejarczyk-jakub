import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStoreModel } from '../model/store/project-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { ProjectBuilder } from '../../builder/service/project.builder';

@State<ProjectStoreModel>({
  name: 'project',
  defaults: {
    sectionBuilder: SectionBuilder.buildDataForKind('project'),
    projectBuilder: ProjectBuilder.buildData(),
  },
})
@Injectable()
export class ProjectStoreState {
  @Selector()
  static getState(state: ProjectStoreModel) {
    return state;
  }
}
