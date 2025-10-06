import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorType } from '../../../type/color.type';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'section-dumb',
  templateUrl: './section-dumb.component.html',
  styleUrl: './section-dumb.component.scss',
  imports: [CommonModule],
})
export class SectionDumbComponent {
  color = input.required<ColorType>();

  maxWidth960px = input(false);

  marginAuto = input(false);

  constructor(private readonly bemUti: BemUtil) {}

  buildMainClassNames() {
    return {
      [this.bemUti.build('section', 'background', this.color())]: true,
    };
  }

  buildContentClassNames() {
    return {
      [this.bemUti.build('section', 'content', 'max-width-960px')]: this.maxWidth960px(),
      [this.bemUti.build('section', 'content', 'margin-auto')]: this.marginAuto(),
    };
  }
}
