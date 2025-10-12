import { Component, input } from '@angular/core';

import { SvgModel } from '../../../model/svg.model';

@Component({
  selector: 'svg-image',
  templateUrl: './svg-image.component.html',
  styleUrl: './svg-image.component.scss',
})
export class SvgImageComponent {
  model = input.required<SvgModel>();

  buildTransform() {
    const { transform, scale } = this.model().args;
    return `translate(${transform.left}, ${transform.top}) scale(${scale})`;
  }

  buildStrokeWidth() {
    return this.model().args.strokeWidth;
  }
}
