import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { FlexDirectionType, FlexGapType } from './flex-util.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'flex-util',
  templateUrl: './flex-util.component.html',
  styleUrl: './flex-util.component.scss',
  imports: [NgClass],
})
export class FlexUtilComponent {
  direction = input<FlexDirectionType>('row');

  gap = input<FlexGapType>('none');

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    const flexDirectionColumn = this.bemUtil.build('flex', 'direction', 'column');
    const flexGap = this.bemUtil.build('flex', 'gap', this.gap());
    return {
      [flexDirectionColumn]: this.direction() === 'column',
      [flexGap]: true,
    };
  }
}
