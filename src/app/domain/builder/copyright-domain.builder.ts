import { Injectable } from '@angular/core';

import { DataStateModel } from '../../model/state/data-state.model';
import { MetadataStateModel } from '../../model/state/metadata-state.model';
import { AppearanceStateModel } from '../../model/state/appearance-state.model';
import { ParagraphDomainModel } from '../../model/domain/domain/paragraph-domain.model';

@Injectable({ providedIn: 'root' })
export class CopyrightDomainBuilder {
  build(
    dataState: DataStateModel,
    metadataState: MetadataStateModel,
    appearanceState: AppearanceStateModel,
  ): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: dataState.copyright,
      metadata: metadataState.copyright,
      appearance: appearanceState.copyright,
    };
  }
}
