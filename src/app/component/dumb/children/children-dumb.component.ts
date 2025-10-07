import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeType } from '../../../type/size.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'children-dumb',
  templateUrl: './children-dumb.component.html',
  styleUrl: './children-dumb.component.scss',
  imports: [CommonModule],
})
export class ChildrenDumbComponent {
  gap = input<SizeType>('none');

  directionRow = input(false);

  constructor(private readonly bemUtil: BemUtil) {}

  getClassNames() {
    return {
      [this.bemUtil.build('children', 'gap', this.gap())]: true,
      [this.bemUtil.build('children', 'direction', 'row')]: this.directionRow(),
    };
  }
}
