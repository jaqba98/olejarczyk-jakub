import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorUtil {
  convertToAccent(rootColor: string): string {
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
