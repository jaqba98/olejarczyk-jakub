import { Injectable } from '@angular/core';

import { LayoutModel } from '../../../model/layout/layout.model';
import { DomainStateModel } from '../../../model/state/domain-state.model';

@Injectable({ providedIn: 'root' })
export class DescriptionLayoutBuilder {
  build(state: DomainStateModel): LayoutModel {
    return {
      kind: 'leaf',
      component: {
        kind: 'paragraph',
        data: state.description.data,
        metadata: state.description.metadata,
        appearance: state.description.appearance,
      },
    };
  }
}
