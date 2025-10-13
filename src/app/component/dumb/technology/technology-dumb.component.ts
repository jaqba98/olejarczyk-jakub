import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

import { FlexUtilComponent } from '../../util/flex/flex-util.component';
import { BemUtil } from '../../../util/bem.util';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';

@Component({
  selector: 'technology-dumb',
  templateUrl: './technology-dumb.component.html',
  styleUrl: './technology-dumb.component.scss',
  imports: [FlexUtilComponent, NgClass, HeadingTextComponent],
})
export class TechnologyDumbComponent {
  value = input.required<string>();

  svg = input.required<string[]>();

  width = input.required<string>();

  height = input.required<string>();

  viewBox = input.required<string>();

  fill = input.required<string>();

  stroke = input.required<string>();

  rootColor = input.required<string>();

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    // const accent = this.colorUtil.convertToAccent(this.rootColor());
    const technologyColorAccent = this.bemUtil.build('technology', 'color', 'accent');
    return {
      [technologyColorAccent]: true,
    };
  }
}
