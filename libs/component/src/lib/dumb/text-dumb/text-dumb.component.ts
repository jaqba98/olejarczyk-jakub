import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../base/base.component';
import { TextTypeEnum } from './text-type.enum';

@Component({
  selector: 'lib-text-dumb',
  imports: [CommonModule],
  templateUrl: './text-dumb.component.html',
  styleUrl: './text-dumb.component.scss',
})
export class TextDumbComponent extends BaseComponent {
  @Input() tag: keyof typeof TextTypeEnum = 'p';
}
