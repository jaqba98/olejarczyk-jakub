import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { companyDataDomainConst } from '../../const/data/company-data-domain.const';
import { CompanyDataStateDomainModel } from '../../model/state/data/company-data-state-domain.model';

@State<CompanyDataStateDomainModel>({
  name: StateNameDomainEnum.companyDate,
  defaults: companyDataDomainConst,
})
@Injectable()
export class CompanyDateDomainState {
  @Selector()
  static getState(state: CompanyDataStateDomainModel) {
    return state;
  }
}
