import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

import { IconTextComponent } from '../../text/icon/icon-text.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';
import { BemUtil } from '../../../util/bem.util';
import { ColorUtil } from '../../../util/color.util';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { RootColorType } from '../../../type/color.type';

@Component({
  selector: 'technology-dumb',
  templateUrl: './technology-dumb.component.html',
  styleUrl: './technology-dumb.component.scss',
  imports: [IconTextComponent, FlexUtilComponent, NgClass, HeadingTextComponent],
})
export class TechnologyDumbComponent {
  value = input.required<string>();

  icon = input.required<string>();

  rootColor = input.required<RootColorType>();

  constructor(
    private readonly bemUtil: BemUtil,
    private readonly colorUtil: ColorUtil,
  ) {}

  buildClassNames() {
    const accent = this.colorUtil.convertToAccent(this.rootColor());
    const technologyColorAccent = this.bemUtil.build('technology', 'color', accent);
    return {
      [technologyColorAccent]: true,
    };
  }
}
