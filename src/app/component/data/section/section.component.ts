import { Component, input } from '@angular/core';

import { SectionDataModel } from '../../../data/model/section-data.model';
import { DataComponentDecorator } from '../../../decorator/data-component.decorator';

@Component({
  selector: 'section-data-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
@DataComponentDecorator('section')
export class SectionComponent {
  model = input.required<SectionDataModel>();
}
