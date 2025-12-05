import { Injectable } from '@angular/core';

import { TechnologyMetadataModel } from '../../../model/metadata/technology-metadata.model';

@Injectable({ providedIn: 'root' })
export class TechnologyMetadataBuilder {
  build(): TechnologyMetadataModel {
    return {};
  }
}
