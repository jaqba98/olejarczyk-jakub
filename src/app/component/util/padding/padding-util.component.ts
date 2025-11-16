import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { SizeType } from '../../../old/type2/size.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'padding-util',
  templateUrl: './padding-util.component.html',
  styleUrl: './padding-util.component.scss',
  imports: [CommonModule],
})
export class PaddingUtilComponent {
  vertical = input<SizeType>('none');
  horizontal = input<SizeType>('none');

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    return {
      [this.bemUtil.build('padding', 'vertical', this.vertical())]: true,
      [this.bemUtil.build('padding', 'horizontal', this.horizontal())]: true,
    };
  }
}
