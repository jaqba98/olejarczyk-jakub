import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { MarginUtilMaxWidthType } from './margin-util.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'margin-util',
  templateUrl: './margin-util.component.html',
  styleUrl: './margin-util.component.scss',
  imports: [CommonModule],
})
export class MarginUtilComponent {
  maxWidth = input<MarginUtilMaxWidthType>('full');

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    return {
      [this.bemUtil.build('margin', 'max-width', this.maxWidth())]: true,
    };
  }
}
