import { Component, input } from '@angular/core';

import { IconDumbComponent } from '../icon/icon-dumb.component';
import { FlexDumbComponent } from '../flex/flex-dumb.component';
import { SmallDumbComponent } from '../small/small-dumb.component';

@Component({
  selector: 'technology-dumb',
  templateUrl: './technology-dumb.component.html',
  styleUrl: './technology-dumb.component.scss',
  imports: [IconDumbComponent, FlexDumbComponent, SmallDumbComponent],
})
export class TechnologyDumbComponent {
  name = input.required<string>();

  className = input.required<string>();
}
