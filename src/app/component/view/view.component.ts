import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  imports: [CommonModule],
})
export class ViewComponent {
  state = input.required<any>();
}
