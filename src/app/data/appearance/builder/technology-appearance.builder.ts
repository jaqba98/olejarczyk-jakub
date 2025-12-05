import { Injectable } from '@angular/core';

import { TechnologyAppearanceModel } from '../../../model/appearance/technology-appearance.model';

@Injectable({ providedIn: 'root' })
export class TechnologyAppearanceBuilder {
  build(): TechnologyAppearanceModel {
    return {
      main: [],
    };
  }
}
