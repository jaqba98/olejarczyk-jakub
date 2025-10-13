import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { BemUtil } from '../../../util/bem.util';
// import { ColorUtil } from '../../../util/color.util';

@Component({
  selector: 'small-text',
  templateUrl: './small-text.component.html',
  styleUrl: './small-text.component.scss',
  imports: [NgClass],
})
export class SmallTextComponent {
  value = input.required<string>();

  rootColor = input.required<string>();

  constructor(
    private readonly bemUtil: BemUtil,
    // private readonly colorUtil: ColorUtil,
  ) {}

  buildClassNames() {
    // const accent = this.colorUtil.convertToAccent(this.rootColor());
    const accent = '';
    const smallColorAccent = this.bemUtil.build('small', 'color', accent);
    return {
      [smallColorAccent]: true,
    };
  }
}
