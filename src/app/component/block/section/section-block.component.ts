import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'section-block',
  templateUrl: './section-block.component.html',
  imports: [CommonModule],
})
export class SectionBlockComponent extends BaseComponent {}
