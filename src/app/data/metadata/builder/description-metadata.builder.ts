import { Injectable } from '@angular/core';

import { ParagraphMetadataModel } from '../../../model/metadata/paragraph-metadata.model';

@Injectable({ providedIn: 'root' })
export class DescriptionMetadataBuilder {
  build(): ParagraphMetadataModel {
    return {};
  }
}
