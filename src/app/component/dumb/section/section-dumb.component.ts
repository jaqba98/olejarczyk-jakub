import { Component, input } from '@angular/core';

import { HeaderDumbComponent } from '../header/header-dumb.component';

@Component({
  selector: 'section-dumb',
  templateUrl: './section-dumb.component.html',
  styleUrl: './section-dumb.component.scss',
  imports: [HeaderDumbComponent],
})
export class SectionDumbComponent {
  id = input.required<string>();

  title = input.required<string>();
}
