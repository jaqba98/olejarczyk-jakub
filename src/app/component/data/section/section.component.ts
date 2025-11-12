import { Component, input } from '@angular/core';

import { SectionDataModel } from '../../../data/model/section-data.model';
import { DataComponentDecorator } from '../../../decorator/data-component.decorator';

@Component({
  selector: 'data-section-component',
  templateUrl: './section.component.html',
})
@DataComponentDecorator('section')
export class SectionComponent {
  model = input.required<SectionDataModel>();
}
