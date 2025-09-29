import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

import { CompanyStateModel } from './company-state.model';

@State<CompanyStateModel>({
  name: 'company',
  defaults: {
    aprSystem: {
      label: 'APR System',
    },
    primaris: {
      label: 'Primaris',
    },
  },
})
@Injectable()
export class CompanyState {}
