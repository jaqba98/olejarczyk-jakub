import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStoreModel } from '../model/project-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<ProjectStoreModel>({
  name: 'project',
  defaults: {
    sectionData: SectionDomainFinder.findByKind('project'),
  },
})
@Injectable()
export class ProjectStoreState {
  @Selector()
  static getState(state: ProjectStoreModel) {
    return state;
  }
}
