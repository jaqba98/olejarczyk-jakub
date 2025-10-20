import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { CompanyStateModel } from './company-state.model';

@State<CompanyStateModel>({
  name: 'companyMock',
  defaults: {
    aprSystem: {
      name: 'aprSystemName',
      city: 'aprSystemCity',
      country: 'aprSystemCountry',
    },
    primaris: {
      name: 'primarisName',
      city: 'primarisCity',
      country: 'primarisCountry',
    },
  },
})
@Injectable()
export class CompanyState {
  @Selector()
  static getState(state: CompanyStateModel) {
    return state;
  }
}
