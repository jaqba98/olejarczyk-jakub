import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseComponent } from '../../base/base.component';
import { ButtonDumbComponent } from '../../dumb/button-dumb/button-dumb.component';
import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-button-smart',
  imports: [CommonModule, ButtonDumbComponent],
  templateUrl: './button-smart.component.html',
  hostDirectives: [StyleOffDirective],
})
export class ButtonSmartComponent extends BaseComponent {
  @Output() event = new EventEmitter();

  @Input({ required: true }) label!: string;

  @Input({ required: true }) id!: string;

  @Input() isPressed = false;

  @Input() fullWidth = false;

  onEvent(event: string) {
    this.event.emit(event);
  }
}
