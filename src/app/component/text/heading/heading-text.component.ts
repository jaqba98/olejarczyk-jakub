import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { HeadingLevelType } from './heading-level.type';
import { ColorType } from '../../../type/color.type';
import { BemUtil } from '../../../util/bem.util';
import { ColorUtil } from '../../../util/color.util';

@Component({
  selector: 'heading-text',
  templateUrl: './heading-text.component.html',
  styleUrl: './heading-text.component.scss',
  imports: [NgClass],
})
export class HeaderTextComponent {
  level = input.required<HeadingLevelType>();

  value = input.required<string>();

  rootColor = input.required<ColorType>();

  constructor(
    private readonly bemUtil: BemUtil,
    private readonly colorUtil: ColorUtil,
  ) {}

  buildClassNames() {
    const accent = this.colorUtil.convertToAccent(this.rootColor());
    const headingColorAccent = this.bemUtil.build('heading', 'color', accent);
    return {
      [headingColorAccent]: true,
    };
  }
}
