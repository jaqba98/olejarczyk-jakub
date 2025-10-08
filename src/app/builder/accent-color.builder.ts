import { Injectable } from '@angular/core';

import { ColorType } from '../type/color.type';

@Injectable({ providedIn: 'root' })
export class AccentColorBuilder {
  build(color: ColorType): ColorType {
    switch (color) {
      case 'dominant':
        return 'accent';
      case 'complementary':
        return 'accent';
      case 'accent':
        return 'complementary';
      case 'success':
        return 'accent';
      default:
        throw new Error('Not supported color!');
    }
  }
}
