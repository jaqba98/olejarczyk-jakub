import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexType } from './flex-item-util.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'flex-item-util',
  templateUrl: './flex-item-util.component.html',
  styleUrl: './flex-item-util.component.scss',
  imports: [CommonModule],
})
export class FlexItemUtilComponent {
  flex = input<FlexType>('none');

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    return {
      [this.bemUtil.build('flex-item', 'flex', this.flex())]: true,
    };
  }
}
