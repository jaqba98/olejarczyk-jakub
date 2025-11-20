import { Injectable } from '@angular/core';

import { TechnologiesAppearanceModel } from '../../../model/appearance/technologies-appearance.model';

@Injectable({ providedIn: 'root' })
export class TechnologiesAppearanceBuilder {
  build(): TechnologiesAppearanceModel {
    return {};
  }
}
