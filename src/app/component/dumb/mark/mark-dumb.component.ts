import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { PaddingUtilComponent } from '../../util/padding/padding-util.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mark-dumb',
  templateUrl: './mark-dumb.component.html',
  styleUrl: './mark-dumb.component.scss',
  imports: [CommonModule, HeadingTextComponent, PaddingUtilComponent],
})
export class MarkDumbComponent extends BaseComponent {
  text = input.required<string>();
}
