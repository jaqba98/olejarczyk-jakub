import { Injectable } from '@angular/core';

import { LayoutModel } from '../../../model/layout/layout.model';
import { DomainStateModel } from '../../../model/state/domain-state.model';

@Injectable({ providedIn: 'root' })
export class TechnologiesLayoutBuilder {
  build(state: DomainStateModel): LayoutModel {
    return {
      kind: 'leaf',
      component: {
        kind: 'technologies',
        data: state.technologies.data,
        metadata: state.technologies.metadata,
        appearance: state.technologies.appearance,
      },
    };
  }
}
