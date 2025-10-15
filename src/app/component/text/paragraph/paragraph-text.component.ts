import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'paragraph-text',
  templateUrl: './paragraph-text.component.html',
  imports: [CommonModule],
})
export class ParagraphTextComponent extends BaseComponent {
  value = input.required<string>();
}
