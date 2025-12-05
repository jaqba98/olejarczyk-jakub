import { Injectable } from '@angular/core';

import { MapperStateModel } from '../../../model/state/mapper-state.model';
import { ParagraphDataModel } from '../../../model/data/paragraph-data.model';

@Injectable({ providedIn: 'root' })
export class DescriptionDataBuilder {
  build(state: MapperStateModel): ParagraphDataModel {
    return state.description.paragraph;
  }
}
