import { Injectable } from '@angular/core';

import { LayoutModel } from '../../../model/layout/layout.model';
import { DomainStateModel } from '../../../model/state/domain-state.model';

@Injectable({ providedIn: 'root' })
export class CopyrightLayoutBuilder {
  build(state: DomainStateModel): LayoutModel {
    return {
      kind: 'leaf',
      component: {
        kind: 'paragraph',
        data: state.copyright.data,
        metadata: state.copyright.metadata,
        appearance: state.copyright.appearance,
      },
    };
  }
}
