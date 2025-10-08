import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'margin-dumb',
  templateUrl: './margin-dumb.component.html',
  styleUrl: './margin-dumb.component.scss',
  imports: [CommonModule],
})
export class MarginDumbComponent {
  autoLeft = input(false);

  autoRight = input(false);

  maxWidth960px = input(false);

  constructor(private readonly bemUtil: BemUtil) {}

  buildNgClass() {
    return {
      [this.bemUtil.build('margin', 'auto', 'left')]: this.autoLeft(),
      [this.bemUtil.build('margin', 'auto', 'right')]: this.autoRight(),
      [this.bemUtil.build('margin', 'max-width', '960px')]: this.maxWidth960px(),
    };
  }
}
