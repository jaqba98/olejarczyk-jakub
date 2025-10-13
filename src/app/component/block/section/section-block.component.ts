import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../../base/base.component';
import { PaddingUtilComponent } from '../../util/padding/padding-util.component';

@Component({
  selector: 'section-block',
  templateUrl: './section-block.component.html',
  imports: [CommonModule, PaddingUtilComponent],
})
export class SectionBlockComponent extends BaseComponent {}
