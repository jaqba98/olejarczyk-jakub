import { Injectable } from '@angular/core';

import { DataStateModel } from '../../../model/state/data-state.model';
import { MetadataStateModel } from '../../../model/state/metadata-state.model';
import { AppearanceStateModel } from '../../../model/state/appearance-state.model';
import { TechnologyDomainModel } from '../../../model/domain/technology-domain.model';

@Injectable({ providedIn: 'root' })
export class TechnologyDomainBuilder {
  build(
    dataState: DataStateModel,
    metadataState: MetadataStateModel,
    appearanceState: AppearanceStateModel,
  ): TechnologyDomainModel {
    return {
      data: dataState.technology,
      metadata: metadataState.technology,
      appearance: appearanceState.technology,
    };
  }
}
