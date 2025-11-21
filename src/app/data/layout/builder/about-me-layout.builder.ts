import { Injectable } from '@angular/core';

import { LayoutModel } from '../../../model/layout/layout.model';
import { DomainStateModel } from '../../../model/state/domain-state.model';

@Injectable({ providedIn: 'root' })
export class AboutMeLayoutBuilder {
  build(state: DomainStateModel): LayoutModel {
    return {
      kind: 'leaf',
      component: {
        kind: 'paragraph',
        data: state.aboutMe.data,
        metadata: state.aboutMe.metadata,
        appearance: state.aboutMe.appearance,
      },
    };
  }
}
