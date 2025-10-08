import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderType } from '../../../type/header.type';
import { ColorType } from '../../../type/color.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'header-dumb',
  templateUrl: './header-dumb.component.html',
  styleUrl: './header-dumb.component.scss',
  imports: [CommonModule],
})
export class HeaderDumbComponent {
  type = input.required<HeaderType>();

  content = input.required<string>();

  color = input.required<ColorType>();

  constructor(private readonly bemUtil: BemUtil) {}

  buildNgClass() {
    return {
      [this.bemUtil.build('header', 'color', this.color())]: true,
    };
  }
}
