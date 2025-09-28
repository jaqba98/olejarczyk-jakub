import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { CompanyStateModel } from './company.model';
import { CompanyLabelEnum } from './company.enum';

@State<CompanyStateModel>({
  name: 'company',
  defaults: {
    aprSystem: {
      label: CompanyLabelEnum.aprSystem,
    },
    primaris: {
      label: CompanyLabelEnum.primaris,
    },
  },
})
@Injectable()
export class CompanyState {}
