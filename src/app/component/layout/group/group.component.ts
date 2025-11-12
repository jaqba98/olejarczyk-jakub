import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { LayoutComponentDecorator } from '../../../decorator/layout-component.decorator';
import { GroupLayoutModel } from '../../../layout/model/layout.model';
import { LeafComponent } from '../leaf/leaf.component';

@Component({
  selector: 'group-layout-component',
  templateUrl: './group.component.html',
  imports: [CommonModule, LeafComponent],
})
@LayoutComponentDecorator('group')
export class GroupComponent {
  model = input.required<GroupLayoutModel>();
}
