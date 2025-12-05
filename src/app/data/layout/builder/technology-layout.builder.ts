import { Injectable } from '@angular/core';

import { LayoutModel } from '../../../model/layout/layout.model';
import { DomainStateModel } from '../../../model/state/domain-state.model';

@Injectable({ providedIn: 'root' })
export class TechnologyLayoutBuilder {
  build(state: DomainStateModel): LayoutModel {
    return {
      kind: 'leaf',
      component: {
        kind: 'technology',
        domain: {
          data: state.technology.data,
          metadata: state.technology.metadata,
          appearance: state.technology.appearance,
        },
      },
    };
  }
}
