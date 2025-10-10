import { Injectable } from '@angular/core';

import { RootColorType } from '../type/color.type';

@Injectable({ providedIn: 'root' })
export class ColorUtil {
  convertToAccent(rootColor: RootColorType): RootColorType {
    switch (rootColor) {
      case 'dominant':
        return 'accent';
      case 'accent':
        return 'dominant';
      default:
        throw new Error('Not supported color!');
    }
  }
}
