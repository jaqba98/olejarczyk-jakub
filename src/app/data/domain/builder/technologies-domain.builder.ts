import { Injectable } from '@angular/core';

import { AppearanceStateModel } from '../../../model/state/appearance-state.model';
import { DataStateModel } from '../../../model/state/data-state.model';
import { MetadataStateModel } from '../../../model/state/metadata-state.model';
import { TechnologiesDomainModel } from '../../../model/domain/technologies-domain.model';

@Injectable({ providedIn: 'root' })
export class TechnologiesDomainBuilder {
  build(
    dataState: DataStateModel,
    metadataState: MetadataStateModel,
    appearanceState: AppearanceStateModel,
  ): TechnologiesDomainModel {
    return {
      data: dataState.technologies,
      metadata: metadataState.technologies,
      appearance: appearanceState.technologies,
    };
  }
}
