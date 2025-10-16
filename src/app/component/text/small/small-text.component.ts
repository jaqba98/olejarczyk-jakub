import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'small-text',
  templateUrl: './small-text.component.html',
  styleUrl: './small-text.component.scss',
  imports: [CommonModule],
})
export class SmallTextComponent extends BaseComponent {
  value = input.required<string>();
}
