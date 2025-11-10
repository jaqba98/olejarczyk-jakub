import { Component, input } from '@angular/core';

import { LayoutModel } from '../../layout/model/layout.model';
import { KindLayoutEnum } from '../../layout/enum/kind-layout.enum';
import { GroupComponent } from '../group/group.component';
import { LeafComponent } from '../leaf/leaf.component';

@Component({
  selector: 'generator-component',
  templateUrl: './generator.component.html',
  imports: [GroupComponent, LeafComponent],
})
export class GeneratorComponent {
  layout = input.required<LayoutModel>();

  readonly GROUP = KindLayoutEnum.group;
  readonly LEAF = KindLayoutEnum.leaf;
}
