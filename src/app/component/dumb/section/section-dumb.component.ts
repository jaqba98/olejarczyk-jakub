import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderDumbComponent } from '../header/header-dumb.component';
import { MarginDumbComponent } from '../margin/margin-dumb.component';
import { ColorType } from '../../../type/color.type';
import { BemUtil } from '../../../util/bem.util';
import { FlexDumbComponent } from '../flex/flex-dumb.component';
import { ColorUtil } from '../../../util/color.util';

@Component({
  selector: 'section-dumb',
  templateUrl: './section-dumb.component.html',
  styleUrl: './section-dumb.component.scss',
  imports: [CommonModule, HeaderDumbComponent, MarginDumbComponent, FlexDumbComponent],
})
export class SectionDumbComponent {
  id = input.required<string>();

  title = input.required<string>();

  color = input.required<ColorType>();

  constructor(
    private readonly bemUtil: BemUtil,
    private readonly colorUtil: ColorUtil,
  ) {}

  buildNgClass() {
    return {
      [this.bemUtil.build('section', 'color', this.color())]: true,
    };
  }

  buildHeaderColor() {
    return this.colorUtil.convertToAccent(this.color());
  }
}
