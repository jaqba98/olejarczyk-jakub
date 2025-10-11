import { Selector, State } from '@ngxs/store';

import { CompanyStateModel } from './company-state.model';
import { Injectable } from '@angular/core';

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
