import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponentDecorator } from '../../decorator/layout-component.decorator';
import { KindLayoutEnum } from '../../layout/enum/kind-layout.enum';
import { GroupLayoutModel, LeafLayoutModel } from '../../layout/model/layout.model';
import { GeneratorComponent } from '../generator/generator.component';
import { LeafComponent } from '../leaf/leaf.component';

@Component({
  selector: 'group-component',
  templateUrl: './group.component.html',
  imports: [CommonModule, GeneratorComponent, LeafComponent],
})
@LayoutComponentDecorator(KindLayoutEnum.group)
export class GroupComponent {
  model = input.required<GroupLayoutModel>();

  buildLeafLayout(): LeafLayoutModel {
    return {
      kind: KindLayoutEnum.leaf,
      data: this.model().data,
    };
  }
}
