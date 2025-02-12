import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-text-dumb',
  imports: [CommonModule],
  templateUrl: './text-dumb.component.html',
  styleUrl: './text-dumb.component.scss',
})
export class TextDumbComponent extends BaseComponent {}
