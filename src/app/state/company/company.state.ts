import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { CompanyStateModel } from './company-state.model';
import { CompanyConst } from './company.const';

@State<CompanyStateModel>({
  name: 'company',
  defaults: CompanyConst,
})
@Injectable()
export class CompanyState {
  @Selector()
  static getState(state: CompanyStateModel) {
    return state;
  }
}
