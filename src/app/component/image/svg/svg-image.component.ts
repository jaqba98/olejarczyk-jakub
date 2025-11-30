import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgModel } from '../../../model/svg/svg.model';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'svg-image',
  templateUrl: './svg-image.component.html',
  imports: [CommonModule],
})
export class SvgImageComponent extends BaseComponent {
  model = input.required<SvgModel>();

  type = input.required<'light' | 'dark'>();

  buildTransform() {
    const { scale } = this.model().args;
    const finalScale = scale - 0.2;
    return `translate(4, 6) scale(${finalScale})`;
  }

  buildStrokeWidth() {
    return this.model().args.strokeWidth;
  }
}
