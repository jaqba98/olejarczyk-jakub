import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { HeadingTextLevelType } from './heading-text.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'heading-text',
  templateUrl: './heading-text.component.html',
  styleUrl: './heading-text.component.scss',
  imports: [NgClass],
})
export class HeadingTextComponent {
  level = input.required<HeadingTextLevelType>();

  value = input.required<string>();

  rootColor = input.required<string>();

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    // const accent = this.colorUtil.convertToAccent(this.rootColor());
    const headingColorAccent = this.bemUtil.build('heading', 'color', 'accent');
    return {
      [headingColorAccent]: true,
    };
  }
}
