import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { PersonalDataStateDomainModel } from '../../model/state/data/personal-data-state-domain.model';
import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { personalDataDomainConst } from '../../const/data/personal-data-domain.const';

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
