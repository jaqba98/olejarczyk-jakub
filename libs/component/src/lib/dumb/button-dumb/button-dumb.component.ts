import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-button-dumb',
  imports: [CommonModule],
  templateUrl: './button-dumb.component.html',
  styleUrl: './button-dumb.component.scss',
})
export class ButtonDumbComponent extends BaseComponent {
  @Output() event = new EventEmitter<string>();

  @Input({ required: true }) label!: string;

  @Input({ required: true }) value!: string;

  @Input() active = false;

  @Input() full = false;

  onClick() {
    this.event.emit(this.value);
  }
}
