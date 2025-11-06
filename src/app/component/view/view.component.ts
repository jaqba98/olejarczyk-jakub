import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  imports: [CommonModule],
})
export class ViewComponent {
  state = input.required<Observable<any>>();
}
