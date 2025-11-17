import { Injectable } from '@angular/core';

import { SectionDomainModel } from '../../model/domain/domain/section-domain.model';
import { AppearanceStateModel } from '../../model/state/appearance-state.model';
import { DataStateModel } from '../../model/state/data-state.model';
import { MetadataStateModel } from '../../model/state/metadata-state.model';

@Injectable({ providedIn: 'root' })
export class SectionDomainBuilder {
  build(
    dataState: DataStateModel,
    metadataState: MetadataStateModel,
    appearanceState: AppearanceStateModel,
  ): SectionDomainModel {
    return {
      kind: 'section',
      data: dataState.section,
      metadata: metadataState.section,
      appearance: appearanceState.section,
    };
  }
}
