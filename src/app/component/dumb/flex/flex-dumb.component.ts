import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BemUtil } from '../../../util/bem.util';
import { SizeType } from '../../../type/size.type';

@Component({
  selector: 'flex-dumb',
  templateUrl: './flex-dumb.component.html',
  styleUrl: './flex-dumb.component.scss',
  imports: [CommonModule],
})
export class FlexDumbComponent {
  directionColumn = input(false);

  gap = input<SizeType>('none');

  constructor(private readonly bemUtil: BemUtil) {}

  buildNgClass() {
    return {
      [this.bemUtil.build('flex', 'direction', 'column')]: this.directionColumn(),
      [this.bemUtil.build('flex', 'gap', this.gap())]: true,
    };
  }
}
