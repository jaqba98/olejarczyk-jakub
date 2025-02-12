import { Component, Input } from '@angular/core';

import { TextDumbComponent } from '../text-dumb/text-dumb.component';

@Component({
  selector: 'lib-logo-dumb',
  imports: [TextDumbComponent],
  templateUrl: './logo-dumb.component.html',
  styleUrl: './logo-dumb.component.scss',
})
export class LogoDumbComponent {
  @Input() logo = '';

  readonly leftSign = '{';

  readonly rightSign = '}';
}
