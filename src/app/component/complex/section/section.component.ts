import { Component, input } from '@angular/core';

import { ComplexComponentDecorator } from '../../../decorator/complex-component.decorator';
import { SectionComplexModel } from '../../../layout/model/layout.model';

@Component({
  selector: 'section-complex-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
@ComplexComponentDecorator('section')
export class SectionComponent {
  model = input.required<SectionComplexModel>();
}
