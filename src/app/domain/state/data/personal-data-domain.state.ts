import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { PersonalDataStateDomainModel } from '../../../data/model/personal-data.model';
import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { personalDataDomainConst } from '../../../data/const/personal-data.const';

@State<PersonalDataStateDomainModel>({
  name: StateNameDomainEnum.personalData,
  defaults: personalDataDomainConst,
})
@Injectable()
export class PersonalDataDomainState {
  @Selector()
  static getState(state: PersonalDataStateDomainModel) {
    return state;
  }
}
