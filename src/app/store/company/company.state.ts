import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { CompanyStateModel } from './company.state.model';

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
