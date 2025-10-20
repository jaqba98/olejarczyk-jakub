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
      order: 0,
    },
    primaris: {
      name: 'Primaris',
      city: 'Warsaw',
      country: 'Poland',
      order: 1,
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
