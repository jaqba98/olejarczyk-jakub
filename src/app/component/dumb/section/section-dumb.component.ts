import { Component, input } from '@angular/core';

@Component({
  selector: 'section-dumb',
  templateUrl: './section-dumb.component.html',
  styleUrl: './section-dumb.component.scss',
})
export class SectionDumbComponent {
  id = input.required<string>();

  title = input.required<string>();
}
