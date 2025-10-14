import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgModel } from '../../../model/svg.model';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'svg-image',
  templateUrl: './svg-image.component.html',
  imports: [CommonModule],
})
export class SvgImageComponent extends BaseComponent {
  model = input.required<SvgModel>();

  buildTransform() {
    const { scale } = this.model().args;
    return `translate(2, 4) scale(${scale})`;
  }

  buildStrokeWidth() {
    return this.model().args.strokeWidth;
  }
}
