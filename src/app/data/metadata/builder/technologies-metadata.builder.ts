import { Injectable } from '@angular/core';

import { TechnologiesMetadataModel } from '../../../model/metadata/description-metadata.model';

@Injectable({ providedIn: 'root' })
export class TechnologiesMetadataBuilder {
  build(): TechnologiesMetadataModel {
    return {};
  }
}
