import { Injectable } from '@angular/core';

import { ParagraphAppearanceModel } from '../../../model/appearance/paragraph-appearance.model';

@Injectable({ providedIn: 'root' })
export class CopyrightAppearanceBuilder {
  build(): ParagraphAppearanceModel {
    return {
      paragraph: ['text-align-center'],
    };
  }
}
