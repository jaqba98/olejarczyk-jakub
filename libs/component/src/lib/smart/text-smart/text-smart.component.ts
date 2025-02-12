import { Component, Input } from '@angular/core';

import { TextDumbComponent } from '../../dumb/text-dumb/text-dumb.component';
import { BaseComponent } from '../../base/base.component';
import { TextTypeEnum } from '../../dumb/text-dumb/text-type.enum';

@Component({
  selector: 'lib-text-smart',
  imports: [TextDumbComponent],
  templateUrl: './text-smart.component.html',
})
export class TextSmartComponent extends BaseComponent {
  @Input() tag: keyof typeof TextTypeEnum = 'p';
}
