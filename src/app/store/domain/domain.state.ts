import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { DomainStateModel } from './domain-state.model';

@State<DomainStateModel>({
  name: 'domain',
  defaults: {
    frontend: {
      label: 'Frontend',
      order: 0,
    },
    backend: {
      label: 'Backend',
      order: 1,
    },
    devops: {
      label: 'DevOps',
      order: 2,
    },
    integration: {
      label: 'Integration',
      order: 3,
    },
    common: {
      label: 'Common',
      order: 4,
    },
  },
})
@Injectable()
export class DomainState {}
