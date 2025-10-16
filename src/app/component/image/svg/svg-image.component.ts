import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgModel } from '../../../model/svg.model';

@Component({
  selector: 'svg-image',
  templateUrl: './svg-image.component.html',
  imports: [CommonModule],
})
export class SvgImageComponent {
  model = input.required<SvgModel>();

  buildTransform() {
    const { scale } = this.model().args;
    return `translate(2, 4) scale(${scale})`;
  }

  buildStrokeWidth() {
    return this.model().args.strokeWidth;
  }
}
