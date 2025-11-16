import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { SizeType } from '../../../old/type2/size.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'interspace-util',
  templateUrl: './interspace-util.component.html',
  styleUrl: './interspace-util.component.scss',
  imports: [CommonModule],
})
export class InterspaceUtilComponent {
  left = input<SizeType>('none');

  top = input<SizeType>('none');

  right = input<SizeType>('none');

  bottom = input<SizeType>('none');

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    return {
      [this.bemUtil.build('interspace', 'left', this.left())]: true,
      [this.bemUtil.build('interspace', 'top', this.top())]: true,
      [this.bemUtil.build('interspace', 'right', this.right())]: true,
      [this.bemUtil.build('interspace', 'bottom', this.bottom())]: true,
    };
  }
}
