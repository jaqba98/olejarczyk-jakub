import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseComponent } from '../../base/base.component';
import { ButtonDumbComponent } from '../../dumb/button-dumb/button-dumb.component';

@Component({
  selector: 'lib-button-smart',
  imports: [CommonModule, ButtonDumbComponent],
  templateUrl: './button-smart.component.html',
})
export class ButtonSmartComponent extends BaseComponent {
  @Output() event = new EventEmitter();

  @Input() label = '';

  @Input() isPressed = false;

  onEvent() {
    this.event.emit();
  }
}
