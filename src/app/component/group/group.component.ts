import { Component, input } from '@angular/core';

import { LayoutComponentDecorator } from '../../decorator/layout-component.decorator';
import { KindLayoutEnum } from '../../layout/enum/kind-layout.enum';
import { GroupLayoutModel } from '../../layout/model/layout.model';
import { GeneratorComponent } from '../generator/generator.component';

@Component({
  selector: 'group-component',
  templateUrl: './group.component.html',
  imports: [GeneratorComponent],
})
@LayoutComponentDecorator(KindLayoutEnum.group)
export class GroupComponent {
  model = input.required<GroupLayoutModel>();
}
