import { Component, input } from '@angular/core';

import { EmptyDataModel } from '../../../data/model/empty-data.model';
import { DataComponentDecorator } from '../../../decorator/data-component.decorator';
import { KindDataEnum } from '../../../data/enum/kind-data.enum';

@Component({
  selector: 'data-empty-component',
  templateUrl: './empty.component.html',
})
@DataComponentDecorator(KindDataEnum.empty)
export class EmptyComponent {
  model = input.required<EmptyDataModel>();
}
