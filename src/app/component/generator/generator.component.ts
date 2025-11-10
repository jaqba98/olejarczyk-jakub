import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModel } from '../../layout/model/layout.model';
import { getLayoutComponent } from '../../decorator/layout-component.decorator';

import '../group/group.component';
import '../leaf/leaf.component';

@Component({
  selector: 'generator-component',
  templateUrl: './generator.component.html',
  imports: [CommonModule],
})
export class GeneratorComponent {
  layout = input.required<LayoutModel>();

  getLayoutComponent() {
    return getLayoutComponent(this.layout().kind);
  }
}
