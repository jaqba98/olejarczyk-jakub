import { Injectable } from '@angular/core';

import { MapperStateModel } from '../../model/state/mapper-state.model';
import { ParagraphDataModel } from '../../model/data/paragraph-data.model';

@Injectable({ providedIn: 'root' })
export class CopyrightDataBuilder {
  build(state: MapperStateModel): ParagraphDataModel {
    const { text } = state.copyright;
    return { text };
  }
}
