import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { CompanyStateDomainModel } from '../model/state/company-state-domain.model';
import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { companyDataDomainConst } from '../const/data/company-data-domain.const';

@State<CompanyStateDomainModel>({
  name: StateNameDomainEnum.company,
  defaults: companyDataDomainConst,
})
@Injectable()
export class CompanyDomainState {
  @Selector()
  static getState(state: CompanyStateDomainModel) {
    return state;
  }
}
