import { Component, input } from '@angular/core';

import { SmallDumbComponent } from '../small/small-dumb.component';

@Component({
  selector: 'technology-dumb',
  templateUrl: './technology-dumb.component.html',
  styleUrl: './technology-dumb.component.scss',
  imports: [SmallDumbComponent],
})
export class TechnologyDumbComponent {
  name = input.required<string>();
}
