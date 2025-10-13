import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { SizeType } from '../../../type/size.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'flex-util',
  templateUrl: './flex-util.component.html',
  styleUrl: './flex-util.component.scss',
  imports: [CommonModule],
})
export class FlexUtilComponent {
  gap = input<SizeType>('none');

  directionRow = input<boolean>(false);

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    return {
      [this.bemUtil.build('flex', 'gap', this.gap())]: true,
      [this.bemUtil.build('flex', 'direction', 'row')]: this.directionRow(),
    };
  }
}
