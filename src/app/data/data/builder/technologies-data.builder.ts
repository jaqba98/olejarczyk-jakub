import { Injectable } from '@angular/core';

import { TechnologiesDataModel } from '../../../model/data/technologies-data.model';

@Injectable({ providedIn: 'root' })
export class TechnologiesDataBuilder {
  build(): TechnologiesDataModel {
    return {};
  }
}
