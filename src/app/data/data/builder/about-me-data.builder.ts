import { Injectable } from '@angular/core';

import { ParagraphDataModel } from '../../../model/data/paragraph-data.model';
import { MapperStateModel } from '../../../model/state/mapper-state.model';

@Injectable({ providedIn: 'root' })
export class AboutMeDataBuilder {
  build(state: MapperStateModel): ParagraphDataModel {
    const { texts } = state.aboutMe;
    return { texts };
  }
}
