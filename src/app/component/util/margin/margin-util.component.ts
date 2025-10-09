import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { MarginUtilMaxWidthType } from './margin-util.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'margin-util',
  templateUrl: './margin-util.component.html',
  styleUrl: './margin-util.component.scss',
  imports: [NgClass],
})
export class MarginUtilComponent {
  autoLeft = input(false);

  autoRight = input(false);

  maxWidth = input<MarginUtilMaxWidthType>('100%');

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    const marginAutoLeft = this.bemUtil.build('margin', 'auto', 'left');
    const marginAutoRight = this.bemUtil.build('margin', 'auto', 'right');
    const marginMaxWidthFull = this.bemUtil.build('margin', 'max-width', 'full');
    const marginMaxWidth960px = this.bemUtil.build('margin', 'max-width', '960px');
    return {
      [marginAutoLeft]: this.autoLeft(),
      [marginAutoRight]: this.autoRight(),
      [marginMaxWidthFull]: this.maxWidth() === '100%',
      [marginMaxWidth960px]: this.maxWidth() === '960px',
    };
  }
}
