import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonDumbComponent } from '../../dumb/button-dumb/button-dumb.component';

@Component({
  selector: 'lib-button-smart',
  imports: [ButtonDumbComponent],
  templateUrl: './button-smart.component.html',
})
export class ButtonSmartComponent {
  @Output() event = new EventEmitter<string>();

  @Input({ required: true }) label!: string;

  @Input({ required: true }) value!: string;

  onClick(event: string) {
    this.event.emit(event);
  }
}
