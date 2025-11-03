import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStoreModel } from '../model/store/project-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { ProjectDataBuilder } from '../../builder/data/project-data.builder';

@State<ProjectStoreModel>({
  name: 'project',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('project'),
    projectData: ProjectDataBuilder.buildData(),
  },
})
@Injectable()
export class ProjectStoreState {
  @Selector()
  static getState(state: ProjectStoreModel) {
    return state;
  }
}
