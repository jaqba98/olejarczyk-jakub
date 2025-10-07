import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'child-dumb',
  templateUrl: './child-dumb.component.html',
  styleUrl: './child-dumb.component.scss',
  imports: [CommonModule],
})
export class ChildDumbComponent {
  flex = input(1);

  getStyles() {
    return {
      flex: this.flex(),
    };
  }
}
