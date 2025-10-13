import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BemUtil {
  build(block: string, element: string = '', modifier: string = '') {
    if (block === '') {
      throw new Error('The block can not be empty!');
    }
    if (element !== '' && modifier !== '') {
      return `${block}__${element}--${modifier}`;
    }
    if (element !== '' && modifier === '') {
      return `${block}__${element}`;
    }
    if (element === '' && modifier !== '') {
      return `${block}--${modifier}`;
    }
    return block;
  }
}
