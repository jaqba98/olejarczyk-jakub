import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

import { ColorType } from '../../../type/color.type';
import { ColorUtil } from '../../../util/color.util';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'icon-text',
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.scss',
  imports: [NgClass],
})
export class IconTextComponent {
  icon = input.required<string>();

  rootColor = input.required<ColorType>();

  constructor(
    private readonly bemUtil: BemUtil,
    private readonly colorUtil: ColorUtil,
  ) {}

  buildClassNames() {
    const accent = this.colorUtil.convertToAccent(this.rootColor());
    const iconColorAccent = this.bemUtil.build('icon', 'color', accent);
    return {
      icon: true,
      [iconColorAccent]: true,
    };
  }
}
