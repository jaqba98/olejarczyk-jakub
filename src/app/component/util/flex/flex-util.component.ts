import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { FlexUtilDirectionType, FlexUtilGapType } from './flex-util.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'flex-util',
  templateUrl: './flex-util.component.html',
  styleUrl: './flex-util.component.scss',
  imports: [NgClass],
})
export class FlexUtilComponent {
  direction = input<FlexUtilDirectionType>('row');

  gap = input<FlexUtilGapType>('none');

  alignItemsCenter = input(false);

  justifyContentCenter = input(false);

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    const flexDirectionColumn = this.bemUtil.build('flex', 'direction', 'column');
    const flexGap = this.bemUtil.build('flex', 'gap', this.gap());
    const flexAlignItemsCenter = this.bemUtil.build('flex', 'align-items', 'center');
    const flexJustifyContentCenter = this.bemUtil.build('flex', 'justify-content', 'center');
    return {
      [flexDirectionColumn]: this.direction() === 'column',
      [flexGap]: true,
      [flexAlignItemsCenter]: this.alignItemsCenter(),
      [flexJustifyContentCenter]: this.justifyContentCenter(),
    };
  }
}
