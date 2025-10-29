import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { ExperienceStateDomainModel } from '../../domain/model/experience-domain.model';
import { experienceDataDomainConst } from '../const/data/experience-data-domain.const';

@State<ExperienceStateDomainModel>({
  name: StateNameDomainEnum.experience,
  defaults: experienceDataDomainConst,
})
@Injectable()
export class ExperienceDomainState {
  @Selector()
  static getState(state: ExperienceStateDomainModel) {
    return state;
  }
}
