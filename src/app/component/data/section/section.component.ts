import { Component, input } from '@angular/core';

import { SectionDataModel } from '../../../data/model/section-data.model';
import { DataComponentDecorator } from '../../../decorator/data-component.decorator';
import { KindDataEnum } from '../../../data/enum/kind-data.enum';

@Component({
  selector: 'data-section-component',
  templateUrl: './section.component.html',
})
@DataComponentDecorator(KindDataEnum.section)
export class SectionComponent {
  model = input.required<SectionDataModel>();
}
