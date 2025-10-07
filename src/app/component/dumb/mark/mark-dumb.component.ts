import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallDumbComponent } from '../small/small-dumb.component';

@Component({
  selector: 'mark-dumb',
  templateUrl: './mark-dumb.component.html',
  styleUrl: './mark-dumb.component.scss',
  imports: [CommonModule, SmallDumbComponent],
})
export class MarkDumbComponent {
  text = input.required<string>();
}
