import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mark-dumb',
  templateUrl: './mark-dumb.component.html',
  styleUrl: './mark-dumb.component.scss',
  imports: [CommonModule],
})
export class MarkDumbComponent {
  text = input.required<string>();
}
