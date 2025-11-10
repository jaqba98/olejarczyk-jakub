import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponentDecorator } from '../../decorator/layout-component.decorator';
import { KindLayoutEnum } from '../../layout/enum/kind-layout.enum';
import { GroupLayoutModel } from '../../layout/model/layout.model';
import { GeneratorComponent } from '../generator/generator.component';
import { getDataComponent } from '../../decorator/data-component.decorator';

@Component({
  selector: 'group-component',
  templateUrl: './group.component.html',
  imports: [CommonModule, GeneratorComponent],
})
@LayoutComponentDecorator(KindLayoutEnum.group)
export class GroupComponent {
  model = input.required<GroupLayoutModel>();

  getDataComponent() {
    return getDataComponent(this.model().data.kind);
  }

  getDataInputs() {
    return { model: this.model().data };
  }
}
