import { Injectable } from '@angular/core';

import { LayoutModel } from '../../../model/layout/layout.model';
import { DomainStateModel } from '../../../model/state/domain-state.model';
import { SectionKindType } from '../../../type/kind/section-kind.type';

@Injectable({ providedIn: 'root' })
export class SectionLayoutBuilder {
  build(state: DomainStateModel, kind: SectionKindType, children: LayoutModel[]): LayoutModel {
    return {
      kind: 'group',
      component: {
        kind: 'section',
        data: state.section[kind].data,
        metadata: state.section[kind].metadata,
        appearance: state.section[kind].appearance,
      },
      children,
      mode: 'inside',
    };
  }
}
