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
      order: 0,
    },
    primaris: {
      name: 'primarisName',
      city: 'primarisCity',
      country: 'primarisCountry',
      order: 1,
    },
  },
})
@Injectable()
export class CompanyMockState {
  @Selector()
  static getState(state: CompanyStateModel) {
    return state;
  }
}
