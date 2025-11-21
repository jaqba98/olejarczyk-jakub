import { Injectable } from '@angular/core';

import { ParagraphDataModel } from '../../../model/data/paragraph-data.model';
import { MapperStateModel } from '../../../model/state/mapper-state.model';

@Injectable({ providedIn: 'root' })
export class CopyrightDataBuilder {
  build(state: MapperStateModel): ParagraphDataModel {
    const { text } = state.copyright;
    return { texts: [text] };
  }
}
