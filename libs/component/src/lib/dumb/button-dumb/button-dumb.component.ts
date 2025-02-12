import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TextDumbComponent } from '../text-dumb/text-dumb.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-button-dumb',
  imports: [CommonModule, TextDumbComponent],
  templateUrl: './button-dumb.component.html',
  styleUrl: './button-dumb.component.scss',
})
export class ButtonDumbComponent extends BaseComponent {
  @Output() event = new EventEmitter();

  @Input() label = '';

  @Input() isPressed = false;

  onClick() {
    this.event.emit();
  }

  getClassList() {
    return {
      button__pressed: this.isPressed,
    };
  }
}
