import { Injectable } from '@angular/core';

import { MapperStateModel } from '../../../model/state/mapper-state.model';
import { TechnologyDataModel } from '../../../model/data/technology-data.model';

@Injectable({ providedIn: 'root' })
export class TechnpologyDataBuilder {
  build(state: MapperStateModel): TechnologyDataModel {
    return state.technology.technology;
  }
}
