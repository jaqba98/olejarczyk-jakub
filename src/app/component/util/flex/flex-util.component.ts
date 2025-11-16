import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { SizeType } from '../../../old/type2/size.type';
import { BemUtil } from '../../../util/bem.util';
import { PositionType } from '../../../old/type2/position.type';

@Component({
  selector: 'flex-util',
  templateUrl: './flex-util.component.html',
  styleUrl: './flex-util.component.scss',
  imports: [CommonModule],
})
export class FlexUtilComponent {
  gap = input<SizeType>('none');

  directionRow = input<boolean>(false);

  directionColumnSmall = input<boolean>(false);

  alignItems = input<PositionType>('start');

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    return {
      [this.bemUtil.build('flex', 'gap', this.gap())]: true,
      [this.bemUtil.build('flex', 'direction', 'row')]: this.directionRow(),
      [this.bemUtil.build('flex', 'direction', 'column-small')]: this.directionColumnSmall(),
      [this.bemUtil.build('flex', 'align-items', this.alignItems())]: true,
    };
  }
}
