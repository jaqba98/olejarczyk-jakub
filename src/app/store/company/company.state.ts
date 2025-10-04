import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { CompanyStateModel } from './company-state.model';

@State<CompanyStateModel>({
  name: 'company',
  defaults: {
    aprSystem: {
      name: 'APR System',
      city: 'Kielce',
      country: 'Poland',
    },
    primaris: {
      name: 'Primaris',
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
