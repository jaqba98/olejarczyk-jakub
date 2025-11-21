import { Injectable } from '@angular/core';

import { DataStateModel } from '../../../model/state/data-state.model';
import { MetadataStateModel } from '../../../model/state/metadata-state.model';
import { AppearanceStateModel } from '../../../model/state/appearance-state.model';
import { ParagraphDomainModel } from '../../../model/domain/paragraph-domain.model';

@Injectable({ providedIn: 'root' })
export class DescriptionDomainBuilder {
  build(
    dataState: DataStateModel,
    metadataState: MetadataStateModel,
    appearanceState: AppearanceStateModel,
  ): ParagraphDomainModel {
    return {
      data: dataState.description,
      metadata: metadataState.description,
      appearance: appearanceState.description,
    };
  }
}
