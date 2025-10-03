import { Component, input } from '@angular/core';

import { TextDumbType } from './text-dumb.type';

@Component({
  selector: 'text-dumb',
  templateUrl: './text-dumb.component.html',
  styleUrl: './text-dumb.component.scss',
})
export class TextDumbComponent {
  type = input.required<TextDumbType>();
}
