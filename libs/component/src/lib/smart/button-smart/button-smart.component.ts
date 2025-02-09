import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonDumbComponent } from '../../dumb/button-dumb/button-dumb.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-button-smart',
  imports: [ButtonDumbComponent],
  templateUrl: './button-smart.component.html',
})
export class ButtonSmartComponent extends BaseComponent {
  @Output() event = new EventEmitter<string>();

  @Input({ required: true }) label!: string;

  @Input({ required: true }) value!: string;

  @Input() active = false;

  @Input() full = false;

  onClick(event: string) {
    this.event.emit(event);
  }
}
