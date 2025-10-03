import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { CompanyStateModel } from './company-state.model';

@State<CompanyStateModel>({
  name: 'company',
  defaults: {
    aprSystem: {
      label: 'APR System',
      city: 'Kielce',
      country: 'Poland',
    },
    primaris: {
      label: 'Primaris',
      city: 'Warsaw',
      country: 'Poland',
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
