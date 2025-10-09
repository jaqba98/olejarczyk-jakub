import { Injectable } from '@angular/core';

import { ColorType } from '../type/color.type';

@Injectable({ providedIn: 'root' })
export class ColorUtil {
  convertToAccent(color: ColorType): ColorType {
    switch (color) {
      case 'dominant':
        return 'accent';
      case 'complementary':
        return 'accent';
      case 'accent':
        return 'complementary';
      default:
        throw new Error('Not supported color!');
    }
  }
}
