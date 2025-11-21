import { Injectable } from '@angular/core';

import { MapperStateModel } from '../../../model/state/mapper-state.model';
import { SectionDataModel } from '../../../model/data/section-data.model';

@Injectable({ providedIn: 'root' })
export class SectionDataBuilder {
  build(state: MapperStateModel): SectionDataModel {
    return state.section.data;
  }
}
