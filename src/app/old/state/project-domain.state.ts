import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { ProjectStateDomainModel } from '../../domain/model/project-domain.model';
import { projectDataDomainConst } from '../const/data/project-data-domain.const';

@State<ProjectStateDomainModel>({
  name: StateNameDomainEnum.project,
  defaults: projectDataDomainConst,
})
@Injectable()
export class ProjectDomainState {
  @Selector()
  static getState(state: ProjectStateDomainModel) {
    return state;
  }
}
