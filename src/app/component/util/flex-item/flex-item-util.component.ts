import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

import { FlexItemUtilSizeType } from './flex-item-util.type';

@Component({
  selector: 'flex-item-util',
  templateUrl: './flex-item-util.component.html',
  styleUrl: './flex-item-util.component.scss',
  imports: [NgStyle],
})
export class FlexItemUtilComponent {
  size = input<FlexItemUtilSizeType>('1');

  buildFlex() {
    switch (this.size()) {
      case '1':
        return '100%';
      case '1/2':
        return '50%';
      case '1/3':
        return '33.33%';
      case '1/4':
        return '25%';
      default:
        throw new Error('Not supported size!');
    }
  }
}
