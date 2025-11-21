import { Injectable } from '@angular/core';

import { ParagraphDomainModel } from '../../../model/domain/domain/paragraph-domain.model';
import { AppearanceStateModel } from '../../../model/state/appearance-state.model';
import { DataStateModel } from '../../../model/state/data-state.model';
import { MetadataStateModel } from '../../../model/state/metadata-state.model';

@Injectable({ providedIn: 'root' })
export class AboutMeDomainBuilder {
  build(
    dataState: DataStateModel,
    metadataState: MetadataStateModel,
    appearanceState: AppearanceStateModel,
  ): ParagraphDomainModel {
    return {
      data: dataState.aboutMe,
      metadata: metadataState.aboutMe,
      appearance: appearanceState.aboutMe,
    };
  }
}
