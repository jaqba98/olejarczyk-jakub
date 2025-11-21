import { Injectable } from '@angular/core';

import { ParagraphAppearanceModel } from '../../../model/appearance/paragraph-appearance.model';

@Injectable({ providedIn: 'root' })
export class AboutMeAppearanceBuilder {
  build(): ParagraphAppearanceModel {
    return {
      paragraph: [],
    };
  }
}
