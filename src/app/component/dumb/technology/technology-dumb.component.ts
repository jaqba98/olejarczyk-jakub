import { Component, input } from '@angular/core';

import { IconDumbComponent } from '../icon/icon-dumb.component';
import { HeaderDumbComponent } from '../header/header-dumb.component';

@Component({
  selector: 'technology-dumb',
  templateUrl: './technology-dumb.component.html',
  styleUrl: './technology-dumb.component.scss',
  imports: [IconDumbComponent, HeaderDumbComponent],
})
export class TechnologyDumbComponent {
  name = input.required<string>();

  className = input.required<string>();
}
