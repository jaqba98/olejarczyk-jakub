import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'flex-item-dumb',
  templateUrl: './flex-item-dumb.component.html',
  styleUrl: './flex-item-dumb.component.scss',
  imports: [CommonModule],
})
export class FlexItemDumbComponent {
  columns = input(1);

  buildFlex() {
    return `${100 / this.columns()}%`;
  }
}
