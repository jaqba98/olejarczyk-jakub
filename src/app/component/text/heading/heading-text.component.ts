import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { HeadingTextLevelType } from './heading-text.type';
import { BemUtil } from '../../../util/bem.util';
import { ColorUtil } from '../../../util/color.util';
import { RootColorType } from '../../../type/color.type';

@Component({
  selector: 'heading-text',
  templateUrl: './heading-text.component.html',
  styleUrl: './heading-text.component.scss',
  imports: [NgClass],
})
export class HeadingTextComponent {
  level = input.required<HeadingTextLevelType>();

  value = input.required<string>();

  rootColor = input.required<RootColorType>();

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
