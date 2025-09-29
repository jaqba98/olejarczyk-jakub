import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { DomainStateModel } from './domain-state.model';

@State<DomainStateModel>({
  name: 'domain',
  defaults: {
    frontend: {
      label: 'Frontend',
    },
    backend: {
      label: 'Backend',
    },
    devops: {
      label: 'DevOps',
    },
    integration: {
      label: 'Integration',
    },
    common: {
      label: 'Common',
    },
  },
})
@Injectable()
export class DomainState {}
