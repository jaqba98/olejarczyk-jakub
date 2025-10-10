import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

import { IconTextComponent } from '../../text/icon/icon-text.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';
import { BemUtil } from '../../../util/bem.util';
import { ColorUtil } from '../../../util/color.util';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { RootColorType } from '../../../type/color.type';
import {
  TechnologyIconType,
  TechnologyModel,
} from '../../../store/technology/technology-state.model';

@Component({
  selector: 'technology-dumb',
  templateUrl: './technology-dumb.component.html',
  styleUrl: './technology-dumb.component.scss',
  imports: [IconTextComponent, FlexUtilComponent, NgClass, HeadingTextComponent],
})
export class TechnologyDumbComponent {
  value = input.required<string>();

  type = input.required<TechnologyIconType>();

  devicon = input.required<string>();

  svg = input.required<string[]>();

  width = input.required<string>();

  height = input.required<string>();

  viewBox = input.required<string>();

  fill = input.required<string>();

  stroke = input.required<string>();

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
