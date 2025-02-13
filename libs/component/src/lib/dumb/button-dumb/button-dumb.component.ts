import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TextDumbComponent } from '../text-dumb/text-dumb.component';
import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-button-dumb',
  imports: [CommonModule, TextDumbComponent],
  templateUrl: './button-dumb.component.html',
  styleUrl: './button-dumb.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class ButtonDumbComponent {
  @Output() event = new EventEmitter<string>();

  @Input({ required: true }) label!: string;

  @Input({ required: true }) id!: string;

  @Input() isPressed = false;

  @Input() fullWidth = false;

  onClick() {
    this.event.emit(this.id);
  }

  getClassList() {
    return {
      button__pressed: this.isPressed,
      'button__full-width': this.fullWidth,
    };
  }
}
