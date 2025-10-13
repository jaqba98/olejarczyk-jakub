import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { HeadingTextLevelType } from './heading-text.type';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'heading-text',
  templateUrl: './heading-text.component.html',
  styleUrl: './heading-text.component.scss',
  imports: [CommonModule],
})
export class HeadingTextComponent extends BaseComponent {
  level = input.required<HeadingTextLevelType>();

  value = input.required<string>();
}
